import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const MobileNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/currencies`}
        label="Currencies"
        value="currencies"
        icon={<AttachMoneyIcon />}
      />
      <BottomNavigationAction
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/favourite`}
        label="Favourite"
        value="/favourite"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/login`}
        label="Login"
        value="/login"
        icon={<ExitToAppIcon />}
      />
    </BottomNavigation>
  );
};

export default MobileNavbar;
