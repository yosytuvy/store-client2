import { Box, Button, Typography } from "@mui/material";
import TextFields from "./TextField";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/userValidation";
import FormValues from "../types/FormValues";

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "all",
    resolver: yupResolver<FormValues>(schema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data));
    reset();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4ren",
        alignItems: "center",
      }}
    >
      <Typography component={"h1"}>Sign up</Typography>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit((data) => onSubmit(data))}
        sx={{ width: "100%", mt: "2rem" }}
      ></Box>
      <TextFields
        control={control}
        name="firstName"
        label="first name"
        errors={errors}
      />
      <TextFields
        control={control}
        name="lastName"
        label="last name"
        errors={errors}
      />
      <TextFields
        control={control}
        name="email"
        label="email"
        errors={errors}
      />
      <TextFields
          control={control}
          name="password"
          label="password"
          errors={errors}
          type="password"
        />
        <TextFields
          control={control}
          name="confirmPassword"
          label="Confirm password"
          errors={errors}
          type="password"
        />
      <TextFields
        control={control}
        name="phone"
        errors={errors}
        label="phone"
        type="tel"
      />
      <TextFields
      control={control}
      name="address"
      errors={errors}
      label="address"
      />
      <TextFields
      control={control}
      name="id"
      errors={errors}
      label="id"
      />
      <TextFields
      control={control}
      name="notes"
      errors={errors}
      label="notes for delivery"
      />
      {!Object.keys(errors).length && (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
        )}
    </Box>
  );
};

export default RegisterForm;
