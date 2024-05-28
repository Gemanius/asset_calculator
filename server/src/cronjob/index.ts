import { schedule } from "node-cron";
import { AppAsset } from "../orm/entity/appAsset";
import dataSource from "../orm/index";

type CurrencyRate = { [key: string]: number };

const savePrices = async (data: CurrencyRate) => {
  const prices = await dataSource.getRepository(AppAsset).find();
  prices.forEach((elem) => (elem["price"] = data[elem.apiKey]));
  await dataSource.getRepository(AppAsset).save(prices);
};

const fetchCryptoCurrencies = async (): Promise<CurrencyRate> => {
  let response: any = await fetch("http://api.coinlayer.com/live?access_key=cf49a33a2ad709bf320bb55e1e58ee32", {
    method: "Get",
  });
  response = await response.json();
  return response.rates;
};
const fetchCurrencies = async (): Promise<CurrencyRate> => {
  let response: any = await fetch("https://v6.exchangerate-api.com/v6/65d28bbf6925c63f4038b89e/latest/USD", {
    method: "Get",
  });
  response = await response.json();
  const rates: CurrencyRate = response.conversion_rates;
  for (let key in rates) {
    rates[key] = Math.trunc((1 / rates[key]) * 100) / 100;
  }
  return rates;
};

export const schedulerTask = schedule("* 50 * * * *", async () => {
  const cryptoCurrencies = await fetchCryptoCurrencies();
  const currecnies = await fetchCurrencies();
  await savePrices({ ...cryptoCurrencies, ...currecnies });
  console.log("done");
});
