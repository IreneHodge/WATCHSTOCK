import React, { FC, useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import stockwatch from "../images/stockwatch.svg";
import { SampleData } from "../../sampleData";
import SearchItem from "./SearchItem";
import SearchBar from "./SearchBar";
import WatchList from "./WatchList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 0,
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const App: FC = () => {
  const [ticker, setTicker] = useState(String);
  const [search, setSearch] = useState(``);
  const classes = useStyles();

  //   const checkWatchList

  useEffect(() => {
    console.log("successfully loaded page");
    //ask server for database for saved watchlist
    //checkWatchList();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <img src={stockwatch} alt="Stock Watch Company Banner" />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <SearchBar setSearch={setSearch} search={search} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <WatchList />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <SearchItem />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
