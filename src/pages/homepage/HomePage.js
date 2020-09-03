import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.title}>Вітаємо на дошці оголошень!</h1>
        <Link to="/callboard">Перейти до дошки.</Link>
    </div>
  );
}

export default HomePage;
