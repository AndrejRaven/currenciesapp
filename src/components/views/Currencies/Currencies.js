/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BrowserView, MobileView } from 'react-device-detect';
import Input from '@material-ui/core/Input';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2)
    }
  },
  button: {
    margin: '2%',
    [theme.breakpoints.up('md')]: {
      margin: '5%'
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  table: {
    minWidth: 340
  },
  tableCell: {
    paddingRight: 1,
    paddingLeft: 2,
    fontSize: 2,
    [theme.breakpoints.up('md')]: {
      paddingRight: 4,
      paddingLeft: 5,
      fontSize: 14
    }
  },
  search: {
    background: theme.palette.grey[300]
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 10,
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      fontSize: 14
    }
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

class Currencies extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  handleSearch(phrase) {
    const { changeSearchPhrase } = this.props;
    changeSearchPhrase(phrase);
  }

  render() {
    const {
      loading: { error },
      currencies,
      favourite,
      addToFavourite,
      removeFromFavourite,
      filters
    } = this.props;
    const classes = this.props;

    const Wrapper = (props) => (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              List of available currencies
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </div>
    );

    if (error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <BrowserView>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.tableCell}>
                    Currency
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    Code
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    Mid
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    <form noValidate autoComplete="off">
                      <Input
                        style={{ background: 'white', paddingLeft: '3%' }}
                        placeholder="Search"
                        autoFocus
                        onChange={(event) => {
                          this.handleSearch(event.currentTarget.value);
                        }}
                        value={filters.searchPhrase}
                        inputProps={{ 'aria-label': 'description' }}
                      />
                    </form>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currencies.map((currency) => (
                  <StyledTableRow key={currency.code}>
                    <StyledTableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {currency.currency.toUpperCase()}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {currency.code}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {currency.mid} / zl
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {!favourite.includes(currency) ? (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.button}
                          onClick={() => addToFavourite(currency)}
                        >
                          Add to favourite
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.button}
                          onClick={() => removeFromFavourite(currency)}
                        >
                          Remove
                        </Button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </BrowserView>

        <MobileView>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.tableCell}>
                    Currency
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    Mid
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.tableCell}
                    align="right"
                  />
                </TableRow>
              </TableHead>
              <TableBody>
                {currencies.map((currency) => (
                  <StyledTableRow key={currency.code}>
                    <StyledTableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {currency.currency.toUpperCase()}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="center"
                    >
                      {currency.mid} / zl
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="center"
                    >
                      {!favourite.includes(currency) ? (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.button}
                          onClick={() => addToFavourite(currency)}
                        >
                          Favourite
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.button}
                          onClick={() => removeFromFavourite(currency)}
                        >
                          Remove
                        </Button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MobileView>
      </Wrapper>
    );
  }
}

Currencies.propTypes = {
  fetchCurrencies: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    addToFavourite: PropTypes.func
  })
};

Currencies.defaultProps = {
  fetchCurrencies: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    addToFavourite: PropTypes.func
  })
};

export default withStyles(useStyles)(Currencies);
