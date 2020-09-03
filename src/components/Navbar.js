import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">
          Дошка оголошень
        </a>
        <ul>
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
