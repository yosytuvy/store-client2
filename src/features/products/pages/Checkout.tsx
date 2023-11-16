import React, { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import Box from "@mui/material/Box";

const Checkout = () => {
  useEffect(() => {
    const jerusalemPoint = new Feature(
      new Point(fromLonLat([34.825692, 32.093603]))
    );

    const neveMonossonPoint = new Feature(
      new Point(fromLonLat([34.850144, 32.095884]))
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [jerusalemPoint, neveMonossonPoint],
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scale: 1.2,
        }),
      }),
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([34.839346, 32.092607]),
        zoom: 14,
      }),
    });

    return () => {
      map.setTarget(null!);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "50%",
        height: "250px",
        bottom: "0",
        marginBottom: "20px",
      }}
    >
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </Box>
  );
};

export default Checkout;
