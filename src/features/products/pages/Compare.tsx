import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const Compare = () => {
  const { productId, productToCompareId } = useParams();
  const products = useAppSelector((state) =>
    state.products.products!.filter(
      (product) =>
        product._id === productId || product._id === productToCompareId
    )
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_1280.jpg"})`,
        }}
      >
        <Box
          sx={{
            height: 450,
            width: "40%",
            borderRadius: 5,
            margin: 4,
          }}
        >
          <Typography variant="h4" align="center">
            {products![0].name}
          </Typography>
          <Box color="text.secondary" sx={{ textAlign: "center" }}>
            {products![0] &&
              Object.entries(products![0]).map(([key, value], index) => {
                if (value && !["id", "_id", "rating", "image"].includes(key))
                  return (
                    <Box key={index}>
                      <Table aria-label="simple table">
                        <TableRow>
                          <TableCell align="center" sx={{ width: "40%" }}>
                            <Box textAlign="center">{key}</Box>
                          </TableCell>
                          <TableCell align="center" sx={{ width: "60%" }}>
                            <Box textAlign="center">{value}</Box>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </Box>
                  );
              })}
          </Box>
        </Box>
        <Box
          sx={{
            height: 450,
            width: "50%",
            borderRadius: 5,
            margin: 4,
          }}
        >
          <Typography variant="h4" align="center">
            {products![1].name}
          </Typography>
          <Box color="text.secondary" sx={{ textAlign: "center" }}>
            {products![1] &&
              Object.entries(products![1]).map(([key, value], index) => {
                if (value && !["id", "_id", "rating", "image"].includes(key))
                  return (
                    <Box key={index}>
                      <Table aria-label="simple table">
                        <TableRow>
                          <TableCell align="center" sx={{ width: "40%" }}>
                            <Box textAlign="center">{key}</Box>
                          </TableCell>
                          <TableCell align="center" sx={{ width: "60%" }}>
                            <Box textAlign="center">{value}</Box>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </Box>
                  );
              })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Compare;
