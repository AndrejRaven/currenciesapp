/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../../common/Dialog/Dialog';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
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
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
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

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { favourite } = this.props;
    const classes = this.props;

    const Wrapper = (props) => (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              List of favourite currencies
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </div>
    );

    return (
      <Wrapper>
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
                <StyledTableCell className={classes.tableCell} align="right">
                  <AlertDialog text="remove all" props={this.props} />
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favourite.map((currency) => (
                <StyledTableRow key={currency.code}>
                  <StyledTableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    {currency.currency.toUpperCase()}
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    {currency.mid} / zl{' '}
                  </StyledTableCell>
                  <StyledTableCell className={classes.tableCell} align="right">
                    <AlertDialog
                      text="remove"
                      props={this.props}
                      currency={currency}
                    />
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

export default withStyles(useStyles)(Favourite);
