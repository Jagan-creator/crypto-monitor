import React from "react";
import { Link } from "react-router-dom";
import ToggleLightDark from "./ToggleLightDark";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>CRYPTO MONITOR</h1>
      </Link>
      <div>
        <ToggleLightDark />
      </div>
    </div>
  );
};

export default Navbar;
