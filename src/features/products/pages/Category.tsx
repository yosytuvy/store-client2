import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filters from "../MUI/Filters";
import PriceFilter from "../MUI/PriceFilter";
import Products from "../components/Products";
import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";
interface CategoryProp {
  title: string;
  filters: string[];
}

const Category = ({ title, filters }: CategoryProp) => {
  const { category } = useParams();
  const example = ["a", "b", "c"];
  const handleApplyFilterClick = () => {
    console.log("Apply Filtering clicked!");
  };

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
            {title}
          </Typography>
          <PriceFilter />
        </Box>
        {filters.map((item, index) => (
          <Filters key={index} headline={item} values={example} />
        ))}

        <Button
          style={{ backgroundColor: "your_color_code", color: "inherit" }}
          onClick={() => handleApplyFilterClick()}
        >
          Apply Filtering
        </Button>
        <Products category={category as string} />
      </Box>
    </>
  );
};

export default Category;
