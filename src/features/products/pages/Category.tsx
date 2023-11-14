import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filters from "../MUI/Filters";
import PriceFilter from "../MUI/PriceFilter";
import Products from "../components/Products";
import Button from "@mui/material/Button";
interface CategoryProp {
  title: string;
  filters: string[];
}

const Category = ({ title, filters }: CategoryProp) => {
  const example = ["a", "b", "c"];


  const handleApplyFilterClick = () => {
    console.log("Apply Filtering clicked!");
  };

  return (
    <>
      <Box textAlign="center" marginTop={2}>
        <Typography variant="h4" gutterBottom>
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

      <Products category="phones"/>
    </>
  );
};

export default Category;
