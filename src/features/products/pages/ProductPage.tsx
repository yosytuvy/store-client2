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
import { addProductToCart } from "../../cart/utils/cartUtil";

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

  const handleCompare = () => {
    console.log("Comparing products");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          width: "35%",
          marginTop: "20px",
          position: "absolute",
          top: "5%",
          left: "30%",
          padding: "40px",
        }}
      >
        <Card sx={{ borderRadius: 5 }}>
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
              {product?.name}
            </Typography>
            <Box color="text.secondary" sx={{ textAlign: "center" }}>
              {product &&
                Object.entries(product).map(([key, value], index) => {
                  if (value && !["id", "_id", "rating", "image"].includes(key))
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
              onClick={() =>
                addProductToCart({ productId: product!._id!, quantity: 1 })
              }
            >
              Add to Cart
            </Button>
            <Button variant="outlined" size="small" onClick={handleCompare}>
              Compare
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <OLMap />
      </Box>
    </Box>
  );
};
export default ProductPage;
