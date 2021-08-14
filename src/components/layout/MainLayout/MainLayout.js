import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserView, MobileView } from 'react-device-detect';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import MobileAppBar from '../Navbar/MobileAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <BrowserView className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </BrowserView>
      <MobileView className={classes.rootMobile}>
        <MobileAppBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
        <MobileNavbar />
      </MobileView>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
