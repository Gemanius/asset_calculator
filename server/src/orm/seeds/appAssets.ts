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
];

async function Up(dataSource: DataSource) {
  const isFirstInitialization = await dataSource.getRepository(AppAsset).find();
  if (isFirstInitialization.length > 0) return;
  const data = AppAssetData.map((elem) => {
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
