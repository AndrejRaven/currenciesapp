import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


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
        <Paper className={classes.paper}>
          <Link to="/favourite">Your favourite currencies</Link>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>
          <Link to="/currencies">All currencies</Link>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>
          <Link to="/login">Logout</Link>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}

export default Dashboard;