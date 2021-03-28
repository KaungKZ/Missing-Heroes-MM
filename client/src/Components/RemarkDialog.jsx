import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  Dialog: {
    "@media (max-width: 400px)": {
      padding: "8px 18px",
    },

    "@media (max-width: 320px)": {
      padding: "8px 10px",
    },
  },
  root: {
    fontFamily: "var(--primary-font)",
    color: "var(--text-color)",

    "@media (max-width: 400px)": {
      fontSize: "14px",
    },

    "@media (max-width: 320px)": {
      fontSize: "12px",
    },
  },
}));

export default function RemarkDialog(props) {
  const classes = styles();
  const { onClose, openDialog, value } = props;

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={openDialog}
      PaperProps={{
        style: {
          padding: 15,
          fontFamily: "var(--primary-font)",
          color: "var(--text-color)",
        },
      }}
    >
      <DialogContent className={classes.Dialog}>
        {" "}
        <DialogContentText
          id="open-dialog-description"
          className={classes.root}
        >
          {value}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
