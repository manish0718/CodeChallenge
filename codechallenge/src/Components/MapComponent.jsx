import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const MapComponent = ({ id }) => {
  useEffect(() => {
    new Map({
      target: id,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, [id]);

  return (
    <div
      id={id}
      style={{
        width: "90%",
        height: "45vh",
        margin: "1rem",
        overflow: "hidden",
        border: "1px solid black",
      }}
    ></div>
  );
};

export default MapComponent;
