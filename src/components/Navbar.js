import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: 13,
    height: 60,
    backgroundColor: "#0a0b0c",
    marginBottom: 60,
    fontWeight: 600,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <a href="/">Bulletin board</a>
      <ul>
        <li>
          <NavLink to="/">На Головну</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
