/* eslint-disable */

import React, { lazy } from "react";
import { graphql } from "react-apollo";
import queryString from "query-string";
import apis from "../../common/apis";
import fetchPlaces from "../../common/qql-queries/query-places";

const ProdCard = lazy(() => import("../prod-card/prod-card"));
const Loader = lazy(() => import("../prod-card/loading-card"));



const locationParams =  queryString.parse(location.search)

const LocationList = (props, location) => {

  const { data } = props;
  const place = data.pocSearch ? data.pocSearch[0] : false;

  console.log(data)
  console.log(locationParams)

  return (
    <>
      <div className="location-list">
        {data.loading || !locationParams ? (
          <> 
            <Loader /> <Loader /> <Loader />
            <Loader /> <Loader /> <Loader />
            <Loader /> <Loader /> <Loader />
            <Loader />
          </>
        ) : place ? (
          <>
            <div key={place.id} className="card">
              <ProdCard id={place.id} />
            </div>
          </>
        ) : (
          <> Não encontrado 😥 </>
        )}
      </div>
    </>
  );
};
export default graphql(fetchPlaces, {
  options: (location) => ({
    variables: {
      algorithm: apis.DEFAULT_ALGORITHM,
      lat: location ? locationParams.lat : false,
      long: location ?  locationParams.long : false,
      now: new Date()
    }
  })
})(LocationList);
