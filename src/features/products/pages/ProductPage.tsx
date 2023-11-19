import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import OLMap from "../components/OLMap";
import { addProductToCart } from "../../cart/utils/cartUtil";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const ProductPage = () => {
  const { productId } = useParams();
  const product = useAppSelector((state) =>
    state.products.products?.find(({ _id }) => _id === productId)
  );
  const navigate = useNavigate();
  const handleCompare = () => {
    navigate(`/category/${product!.category}/${productId}`);
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
          marginTop: "20px",
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
