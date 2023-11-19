import { FC } from "react";
import CategoryInterface from "../features/products/interfaces/categoryInterface";
import { Box, Grid, Typography } from "@mui/material";
import { boxStyles } from "../styles/styles";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

type CategoryItemProps = {
  category: CategoryInterface;
  navigate: NavigateFunction;
  categoriesRef: React.MutableRefObject<CategoryInterface[] | null>;
};

const CategoryItem: FC<CategoryItemProps> = ({
  category,
  navigate,
  categoriesRef,
}) => {
  const { name } = category;
  const onClick = async () => {
    try {
      await axios.put(`http://localhost:8181/api/categories/${category.name}`);
      categoriesRef.current?.map((category) => {
        if (category.name === name) category.rating += 1;
      });
      navigate(`/category/${name}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid item xs={2}>
      <Box
        component="div"
        onClick={onClick}
        sx={{
          ...boxStyles,
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "white" }}
          >
            {category.name}
          </Typography>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              borderRadius: 4,
            }}
            alt={`${category.name} image`}
            src={category.image}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default CategoryItem;
