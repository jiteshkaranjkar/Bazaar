import React, { Fragment, useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StocksForm from "./StocksForm";
import Typography from "@mui/material/Typography";

const AddStockDialog = (props) => {
    const [open, setOpen] = useState(props.open);
      
    return(
        <Fragment>
        <div>
          <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Add Stock
                <Typography
                  variant="caption"
                  gutterBottom
                  component="div"
                  display="inline"
                  style={{ marginLeft: 20 }}
                >
                To Add new/existing stock.
                </Typography></DialogTitle>
            <DialogContent>
              <DialogContentText>
              </DialogContentText>
              <StocksForm open={props.open} handleClose={props.handleClose} />
            </DialogContent>
            <DialogActions>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>

    );
}

export default AddStockDialog;