import axios from "axios";
import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { isValidEmail, isValidPassword } from "../../../helpers/validations";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserConnected } from "../slice";
import ROUTES from "../../../router/routerModel";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);
  const { signed } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (isValidEmailInput && isValidPassword(password)) {
        const { data } = await axios.post(
          "http://localhost:8181/api/users/login",
          {
            email: email,
            password: password,
          }
        );
        if (!data) throw new Error();
        localStorage.setItem("token", data.token as string);
        dispatch(setUserConnected());
        if (signed) return navigate(-2);
        return navigate(-1);
      }
    } catch (error) {
      navigate("*");
    }
  };

  return (
    <Stack
      sx={{
        marginTop: "50px",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        width: "100%",
        margin: "20px auto",
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
        onChange={(e) => {
          const isValid = isValidEmail(e.target.value);
          setEmail(e.target.value);
          setIsValidEmailInput(isValid);
        }}
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
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "15px" }}
      />
      <Button
        onClick={handleLogin}
        variant="contained"
        style={{ marginBottom: "15px" }}
      >
        Login
      </Button>
      <Button onClick={() => navigate(ROUTES.signup)}>signup</Button>
    </Stack>
  );
};

export default Login;
