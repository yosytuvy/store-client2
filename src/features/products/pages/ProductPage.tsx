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
    console.log("comparing products");
  };

  const productDetails = {
    company: "Apple",
    screen: '6.1" Super Retina XDR display',
    processor: "A16 Bionic chip",
    battery: "Up to 29 hours video playback",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 745 }}>
        <CardMedia
          sx={{ height: 540 }}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1663614745409"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            "iPhone 14 Pro"
          </Typography>
          <Box
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {Object.entries(productDetails).map(([key, value], index) => (
              <div key={index}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button size="small" onClick={handleCompare}>
            Compare
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductPage