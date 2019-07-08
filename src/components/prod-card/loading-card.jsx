import React from "react";
import "./style.scss";

const Loader = () => {

return (
    <>
      <div className="card-loader">
          <div className="title-fake" />
          <div className="image-fake" />
          <div className="price-fake" />
          <div className="action-fake" />
      </div>
    </>
  )  
}    
export default React.memo(Loader);    



  