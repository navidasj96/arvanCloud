import { useSelector } from "react-redux";
import { RootState } from "../UistateManagment/store";

export const useFormRedux = () => {
  const formState = useSelector<RootState, any>(
    (state) => state.FormRedux.formState
  );

  return {
    formState,
  };
};
