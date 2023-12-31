import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ROUTES from "../../../router/routerModel";

const AppHeader = () => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" onClick={() => navigateTo(ROUTES.login)}>
          login
        </Button>
        <Box style={{ marginLeft: "auto" }}>
          <IconButton
            color="inherit"
            aria-label="shopping cart"
            onClick={() => navigate(ROUTES.cartPage)}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="home"
            onClick={() => navigateTo("/")}
          >
            <HomeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
