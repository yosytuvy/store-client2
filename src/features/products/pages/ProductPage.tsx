import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ProductPage = () => {
  const handleAddToCart = () => {
    console.log("Add to Cart");
  };

  const handleCompare = () => {
    console.log("Comparing products");
  };

  const productDetails = {
    company: "Apple",
    screen: '6.1" Super Retina XDR display',
    processor: "A16 Bionic chip",
    battery: "Up to 29 hours video playback",
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1663614745409"
          title="iPhone 14 Pro"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            iPhone 14 Pro
          </Typography>
          <Box
            color="text.secondary"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            {Object.entries(productDetails).map(([key, value], index) => (
              <Typography key={index}>
                <strong>{key}:</strong> {value}
              </Typography>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="small" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="outlined" size="small" onClick={handleCompare}>
            Compare
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductPage;
