import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import AddOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import CancelOutlined from "@mui/icons-material/CancelOutlined";

export default function StocksForm(props) {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);
  const [stock, setStock] = useState({});

  const getStockQuote = (evnt) => {
    if (evnt.type === "keydown" && evnt.key.length < 3) return;
    if (evnt.keyCode !== 13 && evnt.target.value.length < 3) {
      return;
    } else console.log("value", evnt.target.value);
    evnt.preventDefault();

    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": "b9712201b3msh0af8e85203195bdp177cc6jsn22e6af7f8793",
      },
    };
    fetch(
      "https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=" +
        evnt.target.value,
      options
    )
      .then((response) => response.json())
      .then(
        (response) => setQuote(response.quoteResponse.result[0]),
        // console.log(response.quoteResponse.result[0]),
        setLoading(false)
      )
      .catch((err) => console.error(err));
  };

  const handleAddStock = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbol: "AAPL",
        name: "Apple Inc.",
        quantity: 2,
        unitPrice: 17,
      }),
    };
    fetch("http://localhost:5000/api/stocks", requestOptions)
      .then((response) => response.json(), (props.open = false))
      .catch((err) => console.error(err));
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
          Fetching Quote
        </LoadingButton>
      ) : (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                onKeyDown={(e) => getStockQuote(e)}
                id="symbol"
                name="symbol"
                label="Symbol"
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="longName"
                name="longName"
                label="Stock Name"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              >
                quote.longName
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="quantity"
                name="quantity"
                label="Quantity"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="holdingPrice"
                name="holdingPrice"
                label="Buying Price"
                fullWidth
                variant="standard"
              >
                quote.postMarketPrice
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="date"
                name="date"
                label="Date"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="exchange"
                name="exchange"
                label="Exchange"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              item
              direction="row"
              justtify="flex-center"
              alignItems="flex-center"
            >
              <Button
                variant="contained"
                onClick={props.handleClose}
                startIcon={<CancelOutlined size="0.9rem" />}
              >
                Cancel
              </Button>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              item
              direction="row"
              justtify="flex-center"
              alignItems="flex-center"
            >
              <Button
                variant="contained"
                onClick={handleAddStock}
                startIcon={<AddOutlined size="0.9rem" />}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
