import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import {Grid, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: '5%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});


class Currencies extends React.Component {
  static propTypes = {
    fetchCurrencies: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  

  render() {
    const { loading: { active, error }, currencies, favouriteCurrencies } = this.props;
    const classes = this.props;
    // const cart = [];
    const addToFavourite = (item) => favouriteCurrencies((currentFavourite) => [...currentFavourite, item]);


    const Wrapper = props => (
      <div className={classes.props}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">List of currencies</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container spasing={3} justify="center" align="center" alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h5" gutterBottom>Currency</Typography>
                </Grid>
                <Grid item xs={6}>{props.children}</Grid>
                <Grid item xs={3}>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );

    
    if(active || !currencies.length){
        return (
          <Wrapper>
            <p>Loading...</p>
          </Wrapper>
        );
      } else if(error) {
        return (
          <Wrapper>
            <p>Error! Details:</p>
            <pre>{error}</pre>
          </Wrapper>
        );
      } else {
        return (
          <Wrapper>  
              {currencies.map(({i}) => (
                <Grid container key={i}>
                  <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom>
                        
                    </Typography> 
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant='outlined' size='small' color='primary' className={classes.button} onClick={addToFavourite}>Add to favourite</Button>
                  </Grid> 
                </Grid>
              ))}
          </Wrapper>
        );
      }
    }
}


export default withStyles(useStyles)(Currencies); 