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
    <div class="loader-container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
  );
};

export default React.memo(Loader);
