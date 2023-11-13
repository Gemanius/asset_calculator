import { toast } from "react-toastify";
import { TCustomAsset } from "../../types/asset.type";

export const updateCustomAssetValidation = (data: TCustomAsset): boolean => {
  const { price, amount, name, id } = data;
  if (!price || price < 0 || price == 0) {
    toast.error("Price could not be equal or less than 0");
    return false;
  }
  if (!name || name.length < 3) {
    toast.error("Your custom asset name could not be less than 3 character ");
    return false;
  }
  if (!amount || amount < 0) {
    toast.error("The Price of your assets could not be negative ");
    return false;
  }
  if (!id) {
    toast.error("Id should be Inserted");
    return false;
  }
  return true;
};
export const deleteCustomAssetValidation = (id?: number): boolean => {
  if (!id) {
    toast.error("Id should be Inserted");
    return false;
  }
  return true;
};
export const addCustomAssetValidation = (data: Omit<TCustomAsset, "id">): boolean => {
  const { price, amount, name } = data;
  if (!price || price < 0 || price == 0) {
    toast.error("Price could not be equal or less than 0");
    return false;
  }
  if (!name || name.length < 3) {
    toast.error("Your custom asset name could not be less than 3 character ");
    return false;
  }
  if (!amount || amount < 0) {
    toast.error("The Price of your assets could not be negative ");
    return false;
  }
  return true;
};
