import React, { Fragment, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddStockDialog from "./AddStock/AddStockDialog";

const columns = [
  { field: "id", headerName: "ID", width: 90, sortable: false, hide: true },
  { field: "symbol", headerName: "SYM", width: 90 },
  { field: "date", headerName: "DATE", width: 110 },
  { field: "time", headerName: "TIME", width: 90 , hide: true},
  { field: "change", headerName: "CHANGE", width: 100 },
  { field: "open", headerName: "OPEN", width: 90 },
  { field: "high", headerName: "HIGH", width: 90 },
  { field: "low", headerName: "LOW", width: 90 },
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var rows = [];
  if (props.portfolio !== undefined) {
    console.log(props.portfolio.length);
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
    console.log(rows);
  }
  return (
    <Fragment>
      <div>
        {typeof props.portfolio !== "undefined" ? (
          <div style={{ display: "flow-root", height: '800px', width: '1000px' }}>
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
