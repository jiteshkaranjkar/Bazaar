import React, { Fragment, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StocksForm from "./AddStock/StocksForm";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import AddStockDialog from "./AddStock/AddStockDialog";

const columns = [
  { field: "id", headerName: "ID", width: 90, sortable: false, hide: true },
  { field: "symbol", headerName: "SYM", width: 90 },
  { field: "longName", headerName: "LONG", width: 200 },
  { field: "exchange", headerName: "EXCH", width: 90 },
  { field: "region", headerName: "RGN", width: 90 },
  { field: "regularMarketPrice", headerName: "PRICE", width: 90 },
  { field: "fiftyTwoWeekLow", headerName: "52-LOW", width: 90 },
  { field: "fiftyTwoWeekHigh", headerName: "52-HIGH", width: 90 },
  { field: "marketCap", headerName: "MRK-CAP", width: 90 },
  {
    field: "holdingPrice",
    headerName: "HLD",
    width: 90,
    editable: true,
    description: "Holding Price.",
  },
  { field: "quantity", headerName: "QTY", width: 90, editable: true },
];

export default function StockLists(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var rows = [];
  if (props.portfolio.portfolios !== undefined) {
    console.log(props.portfolio.portfolios[0].pfName);
    var quotes = Object.values(props.portfolio.quotes);
    rows = quotes.map((stockQuote) => ({
      id: stockQuote.messageBoardId,
      symbol: stockQuote.symbol,
      longName: stockQuote.longName,
      exchange: stockQuote.exchange,
      region: stockQuote.region,
      regularMarketPrice: stockQuote.regularMarketPrice,
      fiftyTwoWeekLow: stockQuote.fiftyTwoWeekLow,
      fiftyTwoWeekHigh: stockQuote.fiftyTwoWeekHigh,
      marketCap: stockQuote.marketCap,
      holdingPrice: stockQuote.holdingPrice,
      quantity: stockQuote.quantity,
    }));
    console.log(rows);
  }
  return (
    <Fragment>
      <div>
        {typeof props.portfolio !== "undefined" &&
        typeof props.portfolio.quotes !== "undefined" ? (
          <div style={{ display: "flow-root", height: 800, width: "100%" }}>
            <Box display="flex" m={2} pt={2}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                display="inline"
              >
                Portfolio :{" "}
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  display="inline"
                  style={{ marginright: 20 }}
                >
                  {props.portfolio.portfolios[0].pfName}
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  display="inline"
                  style={{ marginLeft: 20 }}
                >
                  <Button variant="contained" onClick={handleClickOpen}>
                    Add Stock
                  </Button>
                </Typography>
              </Typography>
            </Box>
            <DataGrid
              rows={rows}
              columns={columns}
              rowLength={10}
              pageSize={15}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
      <div>
        <AddStockDialog open={open} handleClose={handleClose} />
      </div>
    </Fragment>
  );
}
