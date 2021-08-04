import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddToWatchList from "./AddToWatchList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>company logo</Paper>
          <Paper className={classes.paper}>Company Name</Paper>
          <Paper className={classes.paper}>Market & Symbol</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>About:</Paper>
          <Paper className={classes.paper}>Company Description</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Open</Paper>
          <Paper className={classes.paper}>High</Paper>
          <Paper className={classes.paper}>Low</Paper>
          <Paper className={classes.paper}>Close</Paper>
          <AddToWatchList />
        </Grid>
      </Grid>
    </div>
  );
}
