import { Box, Button, Typography } from "@mui/material";
import useForm from "../hooks/useForm";
import DisplayFormContext from "./DisplayFormContext";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const formValues = [
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
    "phone",
    "address",
    "id",
    "notes",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4ren",
        alignItems: "center",
      }}
    >
      <Typography component={"h1"}>Details</Typography>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <DisplayFormContext
          control={control}
          errors={errors}
          formValues={formValues}
        />
        <Button
          disabled={!isDirty || !isValid}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
