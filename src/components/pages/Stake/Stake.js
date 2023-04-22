import React from "react";
import {
  Card,
  makeStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import { importToken } from "../../../actions/dexActions";

const useStyles = makeStyles((theme) => ({
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
  }
}));

export const Stake = (props) => {
  const {
    dex: { transaction, tokenList },
    importToken,
  } = props;

  const classes = useStyles();

  return (
    <>
      <Card elevation={20} className={classes.card}>
        <h1 style={{color:"white"}}>Staking will be available soon</h1>
       
      </Card>

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
