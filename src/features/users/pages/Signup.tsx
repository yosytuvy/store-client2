import React from "react";
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
  console.log("hello");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);
  const [isValidPasswordInput, setIsValidPasswordInput] = useState(true);
  const [isValidPasswordMatch, setIsValidPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmailInput(isValidEmail(newEmail));
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPasswordInput(isValidPassword(newPassword));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPasswordConfirmation = e.target.value;
    setConfirmPassword(newPasswordConfirmation);
    setIsValidPasswordMatch(
      isValidPasswordConfirmation(password, newPasswordConfirmation)
    );
  };

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
      sx={{
        // marginTop: "50px",
        // padding: "50px",
        // borderRadius: "8px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // maxWidth: "300px",
        // width: "100%",
        // margin: "20px auto",
        position: "absolute",
        top: "5%",
        left: "35%",
        marginTop: "70px",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
        }}
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        error={!isValidEmailInput}
        helperText={
          !isValidEmailInput ? "Please enter a valid email address" : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
        }}
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
        error={!isValidPasswordInput}
        helperText={
          !isValidPasswordInput
            ? "The password must contain 8 characters, at least an uppercase letter and a lowercase letter"
            : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
        }}
        label="Password Confirmation"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
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
      <Button onClick={() => navigate(ROUTES.login)}>Go to login</Button>
    </Stack>
  );
};

export default Signup;
