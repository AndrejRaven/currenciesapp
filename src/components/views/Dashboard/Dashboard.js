import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserView, MobileView } from 'react-device-detect';
import TypeWriterEffect from 'react-typewriter-effect';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: '20%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '25vh',
    justifyContent: 'center',
    background: theme.palette.grey[200],
    '&:hover': {
      background: theme.palette.grey[300]
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      paddingTop: '50%',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '80vh',
      justifyContent: 'center',
      background: theme.palette.grey[200],
      '&:hover': {
        background: theme.palette.grey[300]
      }
    }
  },
  wrapper: {
    width: '100%',
    height: '80vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '110%',
      marginTop: '-10%',
      zIndex: '-1',
      background: `url("https://i.postimg.cc/YCw4psqN/pexels-karolina-grabowska-4040857.jpg") 50%`,
      backgroundSize: 'cover',
      filter: 'brightness(75%)'
    }
  },
  text: {
    position: 'static',
    height: '80%'
  },
  header: {
    color: '#FFFFFF',
    marginTop: '10%',
    fontFamily: 'Red Hat Display'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <BrowserView className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Welcome to currency app
            </Typography>
          </Grid>
          <Grid item xs>
            <Link
              style={{ textDecoration: 'none', color: '#222' }}
              to="/favourite"
            >
              <Paper className={classes.paper}>
                <FavoriteIcon fontSize="large" />
                <Typography variant="h5" align="center">
                  Favourite currencies
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs>
            <Link
              style={{ textDecoration: 'none', color: '#222' }}
              to="/currencies"
            >
              <Paper className={classes.paper}>
                <AttachMoneyIcon fontSize="large" />
                <Typography variant="h5" align="center">
                  All available currencies
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs>
            <Link style={{ textDecoration: 'none', color: '#222' }} to="/login">
              <Paper className={classes.paper}>
                <ExitToAppIcon fontSize="large" />
                <Typography variant="h5" align="center">
                  Login
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </BrowserView>
      <MobileView>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="center"
          alignContent="space-between"
          className={classes.wrapper}
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className={classes.header}>
              Welcome
            </Typography>
          </Grid>
          <Grid item xs={10} className={classes.text}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '1.5em'
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                'This is a simple currency app that fetching actual exchange cources of polish zloty from national polish bank API. It was made with react-redux stack powered by material-ui. At the bottom of this page you can see three buttons. Currencies - all currencies from API, favourite - your chosen favourite currencies, and Login page for login. There are two version of this react app: mobile and desktop.'
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
            />
          </Grid>
        </Grid>
      </MobileView>
    </>
  );
};

export default Dashboard;
