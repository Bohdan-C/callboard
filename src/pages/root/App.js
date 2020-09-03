import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Callboard from "../callboard/Callboard";
import HomePage from "../homepage/HomePage";
import Navbar from "../../components/Navbar";
import store from "../../redux/store/store";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    background: "#f5f5f5",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.root}>
          <Navbar />
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={Callboard} path="/callboard" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
