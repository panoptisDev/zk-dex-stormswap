import React from "react";
import {
  Card,
  makeStyles
} from "@material-ui/core";
// import {images} from "../../../assets/index"
import { connect } from "react-redux";
import { importToken } from "../../../actions/dexActions";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titleText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: theme.palette.common.white,
        },
  card: {
    width: "96%",
    maxWidth: 600,
    borderRadius: 30,
    boxShadow: `rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px`,
    backgroundColor: theme.palette.primary.bgCard,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 25,
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 7,
      paddingRight: 7,
      width: "96%",
    },
  },
  table: {
    borderRadius: "16px 16px 0px 0px",
    '& thead th': {
      fontWeight: 'bold',
      backgroundColor: '#F7F7F7',
      paddingTop: 8,
      paddingBottom: 8,
    },
    '& tbody td': {
      fontWeight: 'bold',
      color: 'white'
    },
    '& tbody tr:not(:last-child)': {
      marginBottom: 8,
    },
  },
}));

export const Stake = (props) => {
  const {
    dex: { transaction, tokenList },
    importToken,
  } = props;

  const classes = useStyles();

  return (
    <>
        <TableContainer component={Paper} 
      classNames={classes.table} 
      style={{width:"80%", marginBottom:"20px", marginTop:"50px", 
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: "#150215" }}>
        <Table >
            <TableHead style={{paddingTop: 8,paddingBottom: 8, marginBottom:20}}>
            <TableRow style={{color:"white"}}>
                <TableCell style={{color:"white"}}>Farms</TableCell>
                <TableCell style={{color:"white"}}>APR</TableCell>
                <TableCell style={{color:"white"}}>Gauge TVL</TableCell>
                <TableCell style={{color:"white"}}>My Staked LP</TableCell>
                <TableCell style={{color:"white"}}></TableCell>
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
      <TableContainer component={Paper} 
      classNames={classes.table} 
      style={{width:"80%",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: "#150215" }}>
        <Table >
            <TableBody>
            <TableRow style={{color:"white"}}>
                <TableCell style={{color:"white"}}>
                    <div>
                    <Typography className={classes.titleText} align="left">
                        $TORM/ETH
                    </Typography>
                    <div>
                        <img src={`../../../assets/$tormToken.png`} alt="token"/>
                    </div>
                    </div>
                </TableCell>
                <TableCell style={{color:"white"}}>Row 1, Column 2</TableCell>
                <TableCell style={{color:"white"}}>Row 1, Column 3</TableCell>
            </TableRow>
            <TableRow style={{color:"white"}}>
                <TableCell style={{color:"white"}}>Row 2, Column 1</TableCell>
                <TableCell style={{color:"white"}}>Row 2, Column 2</TableCell>
                <TableCell style={{color:"white"}}>Row 2, Column 3</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>

    </>
  );
};

const mapStateToProps = (state) => ({
  account: state.account,
  dex: state.dex,
});

export default connect(mapStateToProps, {
  importToken,
})(Stake);
