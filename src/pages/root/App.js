import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Callboard from "../callboard/Callboard";
import HomePage from "../homepage/HomePage";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Navbar />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Callboard} path="/callboard" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
