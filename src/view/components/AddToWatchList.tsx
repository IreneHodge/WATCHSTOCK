import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { CompanyData } from "../../interfaces";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

interface AddToWatchListProps {
  companyData: CompanyData;
  getWatchlist: Function;
}

const AddToWatchList: FC<AddToWatchListProps> = ({
  companyData,
  getWatchlist,
}) => {
  const classes = useStyles();

  const postWatchList = () => {
    let options = {
      params: {
        companyData: companyData,
      },
    };

    axios
      .post(`http://localhost:3000/watchlist`, options)
      .then((response: any) => {
        console.log(response);
        getWatchlist();
      })
      .catch((err: Error) => {
        console.log(`Erorr in post ${err}`);
      });
  };

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        onClick={() => {
          postWatchList();
        }}
      >
        ADD TO WATCH LIST
      </Button>
    </div>
  );
};

export default AddToWatchList;
