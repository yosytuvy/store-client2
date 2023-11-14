import axios from "axios";
import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirmation,
} from "../../../helpers/validations";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../router/routerModel";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);
  const [isValidPasswordInput, setIsValidPasswordInput] = useState(true);
  const [isValidPasswordMatch, setIsValidPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);
    const isPasswordConfirmationValid = isValidPasswordConfirmation(
      password,
      confirmPassword
    );

    setIsValidEmailInput(isEmailValid);
    setIsValidPasswordInput(isPasswordValid);
    setIsValidPasswordMatch(isPasswordConfirmationValid);

    if (isEmailValid && isPasswordValid && isPasswordConfirmationValid) {
      try {
        const response = await axios.post(
          "http://localhost:8181/api/users/signup",
          {
            email: email,
            password: password,
          }
        );
        if (response.status === 200) return navigate(`${ROUTES.login}/signed`);
      } catch (error) {
        navigate("*");
      }
    }
  };

  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!isValidEmailInput}
        helperText={
          !isValidEmailInput ? "Please enter a valid email address" : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!isValidPasswordInput}
        helperText={
          !isValidPasswordInput
            ? "The password must contain 8 characters, at least an uppercase letter and a lowercase letter"
            : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Password Confirmation"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!isValidPasswordMatch}
        helperText={!isValidPasswordMatch ? "Passwords do not match" : ""}
        style={{ marginBottom: "15px" }}
      />
      <Button
        onClick={handleRegister}
        variant="contained"
        style={{ marginBottom: "15px" }}
      >
        Register
      </Button>
      <Button onClick={() => navigate(ROUTES.login)}>Go to login page</Button>
    </Stack>
  );
};

export default Signup;
