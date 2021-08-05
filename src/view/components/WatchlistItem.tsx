import React, { FC } from "react";
import { CompanyData } from "../../interfaces";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

interface WatchlistItemProps {
  company: CompanyData;
  getWatchlist: Function;
  i: number;
}

const WatchlistItem: FC<WatchlistItemProps> = ({
  company,
  getWatchlist,
  i,
}) => {
  const deleteCompany: Function = () => {
    let options = {
      params: {
        symbol: company.symbol,
      },
    };

    axios
      .delete(`http://localhost:3000/watchlist`, options)
      .then((response: any) => {
        console.log(response);
        getWatchlist();
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  return (
    <ListItem key={i}>
      <ListItemAvatar>
        <Avatar>{company.symbol}</Avatar>
      </ListItemAvatar>
      {company.name}
      {company.open}
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            deleteCompany();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <Divider />
    </ListItem>
  );
};

export default WatchlistItem;
