import React from "react";
import LocationList from "../location-list/location";
import "./style.scss";

const ResultsList = () => {
  return (
    <>
      <div className="resultTitle"> Resultados </div>
      <LocationList />
    </>
  );
};

export default ResultsList;
