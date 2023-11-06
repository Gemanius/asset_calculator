import { FC } from "react";
import { CardStyles } from "./styles";

interface IProps {
  amount: number;
  price: number;
  toggleInputActivation: () => void;
}

// should put data on informations
export const UserAssetValue: FC<IProps> = ({ toggleInputActivation, amount, price }) => {
  return (
    <CardStyles.ClientInfoDeactiveChange>
      <CardStyles.CurrencyAmount>
        <p>
          <b>
            {`You Have: ${amount} `}
            <br />
            {`which worths: ${amount * price}$`}
          </b>
        </p>
      </CardStyles.CurrencyAmount>
      <CardStyles.SubmitButton onClick={toggleInputActivation}>Change</CardStyles.SubmitButton>
    </CardStyles.ClientInfoDeactiveChange>
  );
};
