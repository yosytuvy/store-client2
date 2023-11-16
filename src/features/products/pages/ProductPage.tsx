import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductInterface from "../interfaces/productInterface";
import OLMap from "../components/OLMap";

const ProductPage = () => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const { productId } = useParams();
  useEffect(() => {
    const getProductById = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8181/api/products/id/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [productId]);

  const handleAddToCart = () => {
    console.log("Add to Cart");
  };

  const handleCompare = () => {
    console.log("Comparing products");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Card sx={{ maxWidth: 745 }}>
            {product && (
              <CardMedia
                sx={{ height: 540 }}
                image={product?.image}
                title={product?.name}
              />
            )}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                iPhone 14 Pro
              </Typography>
              <Box color="text.secondary" sx={{ textAlign: "center" }}>
                {product &&
                  Object.entries(product).map(([key, value], index) => {
                    if (
                      value &&
                      !["id", "_id", "rating", "image"].includes(key)
                    )
                      return (
                        <div key={index}>
                          <strong>{key}:</strong> {value}
                        </div>
                      );
                  })}
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="small"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outlined" size="small" onClick={handleCompare}>
                Compare
              </Button>
            </CardActions>
          </Card>
        </Box>
        <OLMap />
      </Box>
    </>
  );
};

export default ProductPage;
