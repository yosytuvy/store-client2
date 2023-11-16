import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import  { FC } from "react";
import TextFieldsProps from "../types/TextFieldProps";
import errorToTrue from "../utils/errorToTrue";
import ErrorMessage from "./ErrorMessage";

const TextFields: FC<TextFieldsProps> = ({
  label,
  inputProps,
  name,
  control,
  errors,
  type
}) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => 
          (<TextField
            {...field}
            {...errorToTrue(errors[name])}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
            type={type}
          />)
        }
      />
      {errors[name] ? <ErrorMessage errorMessage={errors[name]}/>: null}
    </FormControl>
  );
};

export default TextFields;