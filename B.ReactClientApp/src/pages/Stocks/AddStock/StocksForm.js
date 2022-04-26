import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import AddOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import CancelOutlined from "@mui/icons-material/CancelOutlined";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function StocksForm(props) {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [longName, setLongName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [holdingPrice, setHoldingPrice] = useState(0);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(props.open);
  const validationSchema = Yup.object().shape({
    symbol: Yup.string()
      .required("Symbol is required")
      .min(3, "must be at least 3 characters long"),
    longName: Yup.string()
      .min(6, "Stock Name must be at least 6 characters")
      .max(50, "Stock Name must not exceed 50 characters"),
    quantity: Yup.number()
      .required("Quantity is required")
      .moreThan(0, "Quantity must be at greater than 0"),
    holdingPrice: Yup.number()
      .required("Buying Price is required")
      .moreThan(0, "Buying Price must be at greater than 0"),
    date: Yup.date()
      .min(new Date(2010, 0, 1))
      .required("Buying Date is required"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    handleAddStock(data);
  };

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

  const handleAddStock = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data, null, 2),
    };
    fetch("http://localhost:5000/api/stocks", requestOptions)
      .then((response) => response.json())
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
                name="symbol"
                label="Symbol"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                {...register("symbol")}
                error={errors.symbol ? true : false}
                onChange={(event) => {
                  setSymbol(event.target.value);
                }}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.symbol?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="longName"
                name="longName"
                label="Stock Name"
                fullWidth
                autoComplete="shipping address-line1"
                variant="outlined"
                {...register("longName")}
                error={errors.longName ? true : false}
                onChange={(event) => setLongName({ text: event.target.value })}
              >
                <Typography variant="inherit" color="textSecondary">
                  {errors.longName?.message}
                </Typography>
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
                variant="outlined"
                {...register("quantity")}
                error={errors.quantity ? true : false}
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="holdingPrice"
                name="holdingPrice"
                label="Buying Price"
                fullWidth
                variant="outlined"
                {...register("holdingPrice")}
                error={errors.holdingPrice ? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setHoldingPrice(event.target.value);
                }}
              >
                quote.postMarketPrice
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="date"
                  label="Date"
                  name="date"
                  {...register("date")}
                  error={errors.date ? true : false}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="exchange"
                name="exchange"
                label="Exchange"
                {...register("exchange")}
                error={errors.exchange ? true : false}
                fullWidth
                autoComplete="shipping country"
                variant="outlined"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              item
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
              justtify="flex-center"
              alignItems="flex-center"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
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
