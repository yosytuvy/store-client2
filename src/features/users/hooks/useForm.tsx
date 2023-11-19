import { FieldValues, useForm as useFormHook} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/userValidation";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../router/routerModel";
import { FormValues } from "../types/FieldProps";

const useForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState,
  } = useFormHook<FormValues>({
    mode: "all",
    resolver: yupResolver<FormValues>(schema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log("in on submit");
    console.log(JSON.stringify(data));
    navigate(ROUTES.checkout);
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    formState,
  };
};

export default useForm;
