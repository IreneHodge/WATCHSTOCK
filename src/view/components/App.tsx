import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import stockwatch from "../images/stockwatch.svg";
import { SampleData } from "../../sampleData";
import SearchItem from "./SearchItem";
import SearchBar from "./SearchBar";
import Watchlist from "./Watchlist";
import { CompanyData } from "../../interfaces";

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
  const [companyData, setCompanyData] = useState<CompanyData>();
  const [watchlist, setWatchlist] = useState<[CompanyData]>();
  const [search, setSearch] = useState(``);
  const classes = useStyles();

  const companySearch: Function = () => {
    let options: any = {
      params: {
        search: search,
      },
    };

    axios
      .get<CompanyData>(`http://localhost:3000/search`, options)
      .then((data) => {
        setCompanyData(data.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const getWatchlist: Function = () => {
    axios
      .get<[CompanyData]>(`/watchlist`)
      .then((data) => {
        setWatchlist(data.data);
        console.log(data.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("successfully loaded page");
    getWatchlist();
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
              <SearchBar
                companySearch={companySearch}
                setSearch={setSearch}
                search={search}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {watchlist === undefined ? null : (
                <Watchlist watchlist={watchlist} getWatchlist={getWatchlist} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {companyData === undefined ? null : (
              <SearchItem
                companyData={companyData}
                getWatchlist={getWatchlist}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
