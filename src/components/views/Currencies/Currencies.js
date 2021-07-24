import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import {Grid, Button, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core/';
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
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


class Currencies extends React.Component {

  

  static propTypes = {
    fetchCurrencies: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
      addToFavourite: PropTypes.func,
    }),
  }

  addToFavourite(currency){
      const arr = this.props.favourite;
      if(!arr.includes(currency)) {
      arr.push(currency);
      this.props.addToFavourite(arr);
      } else {
        const arr = this.props.favourite;
        const currencyToRemove = arr.indexOf(currency);
        arr.splice(currencyToRemove, 1);
        
        this.props.addToFavourite(arr);
      }
  }

  componentDidMount(){
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }


  render() {
    const { loading: { active, error }, currencies, favourite } = this.props;
    const classes = this.props;


    const Wrapper = props => (
      <div className={classes.props}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">List of available currencies</Typography>
          </Grid>
          <Grid item xs={12}>
            {props.children}
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
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.tableCell}>Currency</StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align="right">Code</StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align="right">Mid</StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currencies.map((currency) => (
                            <StyledTableRow key={currency.code}>
                                <StyledTableCell className={classes.tableCell} component="th" scope="row">
                                    {currency.currency.toUpperCase()}
                                </StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="right">{currency.code}</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="right">{currency.mid} / zl</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="right">
                                    {!favourite.includes(currency) ? 
                                       <Button variant='outlined' size='small' color='primary' className={classes.button} onClick={() => this.addToFavourite(currency)}>Add to favourite</Button>
                                       :
                                       <Button variant='outlined' size='small' color='primary' className={classes.button} onClick={() => this.addToFavourite(currency)}>Remove</Button>
                                    }
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>    
            </TableContainer>
          </Wrapper>
        );
      }
    }
}


export default withStyles(useStyles)(Currencies); 