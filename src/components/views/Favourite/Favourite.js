/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: '5%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  table: {
    minWidth: 340
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
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
      <div className={classes.props}>
        <Grid container spacing={3}>
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
                  Code
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
                    {currency.code}
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
