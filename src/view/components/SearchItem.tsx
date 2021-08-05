import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddToWatchList from "./AddToWatchList";
import { CompanyData } from "../../interfaces";

interface SearchItemProps {
  companyData: CompanyData;
  getWatchlist: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const SearchItem: FC<SearchItemProps> = ({ companyData, getWatchlist }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img src={companyData.logo} alt="Company Logo" />
          </Paper>
          <Paper className={classes.paper}>{companyData.name}</Paper>
          <Paper className={classes.paper}>
            {companyData.exchange}: {companyData.symbol}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>About</Paper>
          <Paper className={classes.paper}>{companyData.url}</Paper>
          <Paper className={classes.paper}>{companyData.description}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Open: {companyData.open}</Paper>
          <Paper className={classes.paper}>High: {companyData.high}</Paper>
          <Paper className={classes.paper}>Low: {companyData.low}</Paper>
          <Paper className={classes.paper}>Close: {companyData.close}</Paper>
          <AddToWatchList
            companyData={companyData}
            getWatchlist={getWatchlist}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchItem;
