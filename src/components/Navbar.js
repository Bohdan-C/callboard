import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  logo: {
    fontWeight: 800,
    marginRight: 60,
    marginLeft: 20,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.nav} color="primary" position="static">
      <Toolbar variant="dense">
        <NavLink to="/">
          <Typography className={classes.logo} variant="h6" component="h6">
            Callboard
          </Typography>
        </NavLink>
        <NavLink to="/">
          <Typography variant="body2" component="p">
            На Головну
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
