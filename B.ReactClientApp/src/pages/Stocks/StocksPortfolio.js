import React, { Fragment, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddStockDialog from "./AddStock/AddStockDialog";

const columns = [
  { field: "id", headerName: "ID", width: 90, sortable: false, hide: true },
  { field: "symbol", headerName: "SYM", width: 90 },
  { field: "currentPrice", headerName: "LTP", width: 90, editable: true },
  { field: "time", headerName: "TIME", width: 90, hide: true },
  { field: "change", headerName: "CHANGE", width: 100 },
  { field: "open", headerName: "OPEN", width: 90 },
  { field: "high", headerName: "HIGH", width: 90 },
  { field: "low", headerName: "LOW", width: 90 },
  { field: "date", headerName: "DATE", width: 110 },
  { field: "volume", headerName: "VOLUME", width: 100 },
  { field: "tradeDate", headerName: "TRADEDATE", width: 90 },
  { field: "purchase", headerName: "PURCHASE", width: 90 },
  { field: "price", headerName: "PRICE", width: 90, editable: true },
  { field: "quantity", headerName: "QTY", width: 90, editable: true },
  { field: "commission", headerName: "COMMISSION", width: 90 },
  { field: "highLimit", headerName: "HIGHLIMIT", width: 90 },
  { field: "lowLimit", headerName: "LOWLIMIT", width: 90 },
  {
    field: "comment",
    headerName: "COMMENT",
    width: 90,
    editable: true,
    description: "Holding Price.",
  },
];

const StocksPortfolio = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [crows, setCrows] = useState(rows);
  const [CurrentRow, setCurrentRow] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var rows = [];
  if (props.portfolio !== undefined) {
    rows = props.portfolio.map((folio) => ({
      id: folio.id,
      symbol: folio.symbol,
      currentPrice: folio.currentPrice,
      date: folio.date,
      time: folio.time,
      change: folio.change,
      open: folio.open,
      high: folio.high,
      low: folio.low,
      volume: folio.volume,
      tradeDate: folio.tradeDate,
      purchase: folio.purchase,
      price: folio.price,
      quantity: folio.quantity,
      commission: folio.commission,
      highLimit: folio.highLimit,
      lowLimit: folio.lowLimit,
      comment: folio.comment,
    }));
    // console.log(rows);
  }
  const handleCellClick = React.useCallback((params) => {
    setSelectedCellParams(params);
    // console.log(params);
  }, []);

  const handleCellEditStart = (params, event) => {
    // event.defaultMuiPrevented = true;
    // console.log(params);
  };

  const handleCellEditStop = (params, event) => {
    // event.defaultMuiPrevented = true;
    // console.log(params);
  };

  const updateRowCosmosDB = (rowId) => {
    const updatedRow = rows.filter(row => row.id === rowId).map(row => row)[0];
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRow),
    };
    fetch("http://localhost:5000/api/stocks/portfolio", requestOptions)
      .then((response) => response.json())
      .then(response => rows = {...rows, response})
      .catch((err) => console.error(err));
  };

  const handleCellEditCommit = React.useCallback(
    ({ id, field, value }) => {
      if (field === "currentPrice") {
        const currentPrice = value.toString();
        const updatedRows = rows.map((row) => {
          if (row.id === id) {
            return { ...row, currentPrice };
          }
          return row;
        });
        rows = updatedRows;
        updateRowCosmosDB(id);
      }
    },
    [rows]
  );

  return (
    <Fragment>
      <div>
        {typeof props.portfolio !== "undefined" ? (
          <div
            style={{ display: "flow-root", height: "800px", width: "1500px" }}
          >
            <Box display="flex" m={2} pt={2}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                display="inline"
              >
                {props.name}
                Portfolio
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
              onCellClick={handleCellClick}
              onCellEditStart={handleCellEditStart}
              onCellEditStop={handleCellEditStop}
              onCellEditCommit={handleCellEditCommit}
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
};

export default StocksPortfolio;
