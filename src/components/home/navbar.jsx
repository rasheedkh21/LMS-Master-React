import React from "react";
import { Navdiv } from "./styleHome";
import CustomizedSwitches from "./toggle";

const Navbar = () => {
  return (
    <Navdiv>
      <div className="nav-right">
        <input type="text" placeholder="Search you Course" required />
        <div className="themechanger">
          <CustomizedSwitches />
        </div>
      </div>
    </Navdiv>
  );
};

export default Navbar;
