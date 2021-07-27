import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: theme.spacing(15),
    },
  }));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">Welcome to currency app</Typography>
      </Grid>
      <Grid item xs>
        <Link style={{ textDecoration: 'none', color: '#222' }} to="/favourite">
          <Paper className={classes.paper}>
            <FavoriteIcon fontSize='large' />
            <Typography variant="h5" align="center">Favourite currencies</Typography>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs>
        <Link style={{ textDecoration: 'none', color: '#222' }} to="/currencies">
          <Paper className={classes.paper}>
            <AttachMoneyIcon fontSize='large' />
            <Typography variant="h5" align="center">All available currencies</Typography>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs>
        <Link style={{ textDecoration: 'none', color: '#222' }} to="/login">
          <Paper className={classes.paper}>
            <ExitToAppIcon fontSize='large' />
            <Typography variant="h5" align="center">Logout</Typography>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  </div>
  );
}

export default Dashboard;