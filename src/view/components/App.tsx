import React, { FC, useState, useEffect } from "react";
import axios from "axios";
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
  const [companyData, setCompanyData] = useState(Object);
  const [search, setSearch] = useState(``);
  const classes = useStyles();

  const companySearch: Function = () => {
    // let config: any = {
    //   method: "get",
    //   options: {
    //     params: {
    //       search: search,
    //     },
    //   },
    //   url: `http://localhost:3000/search`,
    //   headers: {},
    // };
    let options: any = {
      params: {
        search: search,
      },
    };

    axios
      .get(`http://localhost:3000/search`, options)
      .then((data: Object) => {
        console.log(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

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
              <SearchBar
                companySearch={companySearch}
                setSearch={setSearch}
                search={search}
              />
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

// getQA(cb) {
//     const { TOKEN } = this.props;
//     axios
//       .get(
//         `/search`,
//          headers:  {}
//       )
//       .then((obj) => {
//         this.setState({ data: obj.data.results });
//       })
//       .then((results) => {
//         if (cb) {
//           cb(results);
//         }
//       })
//       .catch((err) => console.error(err));
//   }
