import { Control, FieldErrors } from "react-hook-form";
import FormValues from "./FormValues";
import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
} from "@mui/material";

type PasswordFieldProps = {
  label: string;
  inputProps?: Partial<FilledInputProps | OutlinedInputProps | InputProps>;
  name: keyof FormValues;
  control: Control<FormValues, unknown>;
  errors: FieldErrors<FormValues>;
  type?: string;
};

export default PasswordFieldProps;
