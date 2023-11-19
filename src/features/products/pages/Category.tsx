import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Products from "../components/Products";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
 

  const CategoryImageURL =
    "https://plus.unsplash.com/premium_photo-1674071397622-4ab36d7c4a27?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${CategoryImageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            {category}
          </Typography>
        </Box>
        <Products category={category as string} />
      </Box>
    </>
  );
};

export default Category;
