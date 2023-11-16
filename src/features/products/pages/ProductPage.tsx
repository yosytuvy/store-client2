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
import { ProductInCartInterface } from "../../cart/interfaces/cartItemInterface";
import { addProductToCart } from "../../cart/utils/cartUtil";
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

  const handleAddProductToCart = () => {
    const product: ProductInCartInterface = {
      productId: productId!,
      quantity: 1,
    };
    addProductToCart(product);
  };

  const handleCompare = () => {
    console.log("Comparing products");
  };
  return (
    <>
    <Box
      style={{ display: "flex", justifyContent: "center", marginTop: "20px"}}
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
            {product?.name}
          </Typography>
          <Box color="text.secondary" sx={{ textAlign: "center" }}>
            {product &&
              Object.entries(product).map(([key, value], index) => {
                if (value && !["id", "_id", "rating", "image"].includes(key))
                  return (
                    <Box key={index}>
                      <Typography fontWeight="bold" sx={{ display: "inline" }}>
                        {key}:
                      </Typography>{" "}
                      {value}
                    </Box>
                  );
              })}
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="small" onClick={handleAddProductToCart}>
            Add to Cart
          </Button>
          <Button variant="outlined" size="small" onClick={handleCompare}>
            Compare
          </Button>
        </CardActions>
      </Card>
      <Card>
      <OLMap/>
      </Card>
    </Box>
    </>
  );
};

export default ProductPage;
