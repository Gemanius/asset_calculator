import { DataSource } from "typeorm";
import { AppAsset } from "../entity/appAsset";

const AppAssetData = [
  {
    name: "Dogecoin",
    apiKey: "DOGE",
    icon: "https://assets.coinlayer.com/icons/DOGE.png",
  },
  {
    name: "Bitcoin",
    apiKey: "BTC",
    icon: "https://assets.coinlayer.com/icons/BTC.png",
  },
  {
    name: "Litecoin",
    apiKey: "LTC",
    icon: "https://assets.coinlayer.com/icons/LTC.png",
  },
  {
    name: "Ethereum Classic",
    apiKey: "ETC",
    icon: "https://assets.coinlayer.com/icons/ETC.png",
  },
  {
    name: "Ethereum",
    apiKey: "ETH",
    icon: "https://assets.coinlayer.com/icons/ETH.png",
  },
  {
    name: "Ripple",
    apiKey: "XRP",
    icon: "https://assets.coinlayer.com/icons/XRP.png",
  },
  {
    name: "Cardano",
    apiKey: "ADA",
    icon: "https://assets.coinlayer.com/icons/ADA.png",
  },
  {
    name: "Tether",
    apiKey: "USDT",
    icon: "https://assets.coinlayer.com/icons/USDT.png",
  },
  {
    name: "Tronix",
    apiKey: "TRX",
    icon: "https://assets.coinlayer.com/icons/TRX.png",
  },
  {
    name: "Bitcoin Cash / BCC",
    apiKey: "BCH",
    icon: "https://assets.coinlayer.com/icons/BCH.png",
  },
  {
    name: "Monero",
    apiKey: "XMR",
    icon: "https://assets.coinlayer.com/icons/XMR.png",
  },
  {
    name: "Binance Coin",
    apiKey: "BNB",
    icon: "https://assets.coinlayer.com/icons/BNB.png",
  },
  {
    name: "Stellar",
    apiKey: "XLM",
    icon: "https://assets.coinlayer.com/icons/XLM.png",
  },
  {
    name: "Canadian Dollar",
    apiKey: "CAD",
    icon: "https://flagcdn.com/80x60/ca.png",
  },
  {
    name: "EURO",
    apiKey: "EUR",
    icon: "https://flagcdn.com/80x60/eu.png",
  },
  {
    name: "Swiss Franc",
    apiKey: "CHF",
    icon: "https://flagcdn.com/80x60/ch.png",
  },
  {
    name: "UAE Dirham",
    apiKey: "AED",
    icon: "https://flagcdn.com/80x60/ae.png",
  },
  {
    name: "Australian Dollar",
    apiKey: "AUD",
    icon: "https://flagcdn.com/80x60/au.png",
  },
  {
    name: "Bahraini Dinar",
    apiKey: "BHD",
    icon: "https://flagcdn.com/80x60/bh.png",
  },
  {
    name: "Chinese Yuan",
    apiKey: "CNY",
    icon: "https://flagcdn.com/80x60/cn.png",
  },
  {
    name: "British Pound Sterling",
    apiKey: "GBP",
    icon: "https://flagcdn.com/80x60/gb.png",
  },
  {
    name: "Indian Rupee",
    apiKey: "INR",
    icon: "https://flagcdn.com/80x60/in.png",
  },
  {
    name: "Iranian Rial",
    apiKey: "IRR",
    icon: "https://flagcdn.com/80x60/ir.png",
  },
  {
    name: "Kuwaiti Dinar",
    apiKey: "KWD",
    icon: "https://flagcdn.com/80x60/kw.png",
  },
  {
    name: "Qatari Rial",
    apiKey: "QAR",
    icon: "https://flagcdn.com/80x60/qa.png",
  },
  {
    name: "Omani Rial",
    apiKey: "OMR",
    icon: "https://flagcdn.com/80x60/om.png",
  },
  {
    name: "Saudi Riyal",
    apiKey: "SAR",
    icon: "https://flagcdn.com/80x60/sa.png",
  },
  {
    name: "Turkish Lira",
    apiKey: "TRY",
    icon: "https://flagcdn.com/80x60/tr.png",
  },
  {
    name: "Russian Ruble",
    apiKey: "RUB",
    icon: "https://flagcdn.com/80x60/ru.png",
  },
  {
    name: "Gold (troy ounce)",
    apiKey: "XAU",
    icon: "data:image/jpeg;base64,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",
  },
];

async function Up(dataSource: DataSource) {
  const preDatabaseData = await dataSource.getRepository(AppAsset).find();
  const data = AppAssetData.filter((elem) => {
    const isExist = preDatabaseData.find((asset) => asset.apiKey == elem.apiKey);
    if (isExist) return false;
    return true;
  }).map((elem) => {
    const asset = new AppAsset();
    asset.apiKey = elem.apiKey;
    asset.icon = elem.icon;
    asset.name = elem.name;
    return asset;
  });
  await dataSource.getRepository(AppAsset).save(data);
  return;
}

export default Up;
