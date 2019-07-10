/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { graphql } from "react-apollo";
import {uid} from 'react-uid';
import fetchPlaces from "../../common/qql-queries/query-prod";
import "./style.scss";

const ProdCard = props => {
  const [dataproducts, setDataproducts] = useState({ productsQtt: {} });

  function concatProd(productsArray) {
    return productsArray.reduce(
      (arr, next) => arr.concat(next.productVariants),
      []
    );
  }

  function handleChange(id, add) {
    const currQtt = dataproducts.productsQtt[id] || 0;
    const newValue = add ? currQtt + 1 : currQtt - 1;
    setDataproducts({
      productsQtt: {
        [id]: newValue
      }
    });
  }

  function productsView(products) {
    const { productsQtt } = dataproducts;
    const productId = dataproducts.inventoryItemId;
    const currentProdValue = productsQtt[productId];
    return (
      <div  className="card" key={uid("prod-")}>
        <label className="title">{products.title}</label>
        <div className="image-holder">
          <img src={products.imageUrl} alt="erro-img" />
        </div>
        <label className="price">R$ {products.price}</label>
        <div className="counter-holder">
          <button
            onClick={() => handleChange(productId, false)}
            type="button"
            disabled={!currentProdValue}
          >
            -
          </button>
          <input value={currentProdValue || 0} />
          <button
            onClick={() => handleChange(productId, true)}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }

  const { data } = props;
  
  return (
    <>
      <div className="products-wrapper" >
        {data.poc
          ? concatProd(data.poc.products).map(products =>
              productsView(products)
            )
          : null}
      </div>
    </>
  );
};

export default graphql(fetchPlaces, {
  options: props => ({
    variables: {
      id: props.id,
      search: "",
      categoryId: 0
    }
  })
})(ProdCard);
