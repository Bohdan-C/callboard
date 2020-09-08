import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(({
  homePageContainer: {
    display: 'flex',
    height: '100wh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 140,
    marginBottom: 40,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePageContainer}>
      <Typography className={classes.title} variant="h4" component="h4">
        Вітаємо на дошці оголошень!
      </Typography>
      <Button variant="contained" color="primary">
        <Link to="/callboard">Перейти до дошки</Link>
      </Button>
    </div>
  );
};

export default HomePage;
