import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  loader: {
    height: 150,
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div class="lds-hourglass"></div>
  );
};

export default React.memo(Loader);
