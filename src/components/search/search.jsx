/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import "./style.scss";

const Search = () => {
  const [datalocation, setDatalocation] = useState(null);

  function setValuesOfLocation(place) {
    setDatalocation({
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng()
    });
  }

  return (
    <>
      <div className="search-location">
        <Autocomplete
          onPlaceSelected={place => setValuesOfLocation(place)}
          placeholder="Busque um endereço"
          types={["address"]}
        />

        {datalocation ? (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <Link
            className="btn"
            to={{
              pathname: "/resultslist",
              search: `?lat=${datalocation.lat}&long=${datalocation.long}`
            }}
          >
            Pesquisar 🔎
          </Link>
        ) : (
          false
        )}
      </div>
    </>
  );
};

export default React.memo(Search);
