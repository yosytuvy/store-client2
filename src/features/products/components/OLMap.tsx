import { useEffect } from "react";
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
const OLMap = () => {
  useEffect(() => {
    const pointFeature = new Feature(
      new Point(fromLonLat([34.850144, 32.095884]))
    );
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [pointFeature],
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
        center: fromLonLat([34.850144, 32.095884]),
        zoom: 15,
      }),
    });
    return () => {
      map.setTarget(null!);
    };
  }, []);
  return (
    <Box
      component="div"
      id="map"
      sx={{
        width: "96%",
        height: "300px",
        position: "absolute",
        top: "150%",
        marginTop: "10px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
      }}
    ></Box>
  );
};
export default OLMap;
