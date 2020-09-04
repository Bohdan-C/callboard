import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 15,
  },
  link: {
    padding: 5,
    border: "2px solid #636363",
    borderRadius: 10,
    fontSize: 18,
    color: "#636363",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.title}>Вітаємо на дошці оголошень!</h1>
      <Link className={classes.link} to="/callboard">
        Перейти до дошки.
      </Link>
    </div>
  );
}

export default HomePage;
