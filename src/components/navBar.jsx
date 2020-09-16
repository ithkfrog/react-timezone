import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Single Page</Link>
      </li>
      <li>
        <Link to="/multipages">Multipages</Link>
      </li>
    </ul>
  );
};

export default NavBar;
