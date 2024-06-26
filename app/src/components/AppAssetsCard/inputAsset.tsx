import { FC, useEffect, useRef } from "react";
import { CardStyles } from "./styles";
import { Input } from "../atoms/input/style";
import { useDispatch } from "react-redux";
import { EReduxUserAssetsActions } from "../../enum/redux-actions";

interface Iprops {
  inputActivation: boolean;
  id: number;
  amount: number;
  toggleInputActivation: () => void;
}

export const AssetInput: FC<Iprops> = ({ inputActivation, id, amount, toggleInputActivation }) => {
  const dispatch = useDispatch();
  const onClickSubmitButton = () => {
    dispatch({
      type: EReduxUserAssetsActions.UPDATE,
      payload: {
        id,
        amount: inputRef?.current?.value,
      },
    });
    toggleInputActivation();
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputActivation) {
      inputRef.current?.focus();
    }
  }, [inputActivation]);

  return (
    <CardStyles.ClientInfoActiveChange>
      <CardStyles.CurrencyAmount>
        <label htmlFor="userValue">
          <b>You Have:</b>
        </label>
        <Input type="number" id="userValue" defaultValue={amount} ref={inputRef} />
      </CardStyles.CurrencyAmount>
      <CardStyles.SubmitButton onClick={onClickSubmitButton}>Submit</CardStyles.SubmitButton>
    </CardStyles.ClientInfoActiveChange>
  );
};
