import React from "react";
import "./style.scss";

const Footer = () => {
  function renderDesciprion() {
    return <label> Beer Entregas 2019 </label>;
  }

  return (
    <>
      <footer className="site-footer">{renderDesciprion()}</footer>
    </>
  );
};
export default React.memo(Footer);
