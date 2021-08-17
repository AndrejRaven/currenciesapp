import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const MobileAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <NavLink
            style={{ textDecoration: 'none', color: '#fff' }}
            to={`${process.env.PUBLIC_URL}/`}
            exact
          >
            <Typography className="link" variant="h6" noWrap>
              Currency App
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileAppBar;
