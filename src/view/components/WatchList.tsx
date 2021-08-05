import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CompanyData } from "../../interfaces";
import WatchlistItem from "./WatchlistItem";

interface WatchlistProps {
  watchlist: [CompanyData];
  getWatchlist: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const Watchlist: FC<WatchlistProps> = ({ watchlist, getWatchlist }) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          WATCHLIST
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            {watchlist.map((company, i) => {
              return (
                <WatchlistItem
                  company={company}
                  i={i}
                  getWatchlist={getWatchlist}
                />
              );
            })}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default Watchlist;
