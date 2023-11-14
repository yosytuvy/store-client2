import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value: number) {
  return `$${value}`;
}

export default function PriceSlider() {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="price-slider" gutterBottom>
        Price: {valueLabelFormat(value)}
      </Typography>
      <Slider
        value={value}
        min={10}
        step={10}
        max={10000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="price-slider"
      />
    </Box>
  );
}
