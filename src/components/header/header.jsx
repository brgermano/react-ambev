import React from "react";
import "./style.scss";

const Header = () => (
  <>
    <header className="site-header">
      <nav className="nav">
        <ul>
          <li className="active">Beer Hearder</li>
        </ul>
      </nav>
    </header>
  </>
);
export default React.memo(Header);
