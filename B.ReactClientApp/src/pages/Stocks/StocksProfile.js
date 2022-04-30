import React, { useState, useEffect } from "react";
import StockLists from "./StockLists";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import AddOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import AddStockDialog from "./AddStock/AddStockDialog";
import StockTabs from './StockTabs'


const StocksProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stockPortfolio, setStockPortfolio] = useState(Object);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    GetStocksList();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const GetStocksList = () => {
    //show progress bar
    setIsLoading(true)

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": "38cf53090fmsh0faab578421f033p164fafjsn73b543184b1a",
      },
    };

    // fetch(
    //   "https://yh-finance.p.rapidapi.com/market/get-watchlist-detail?userId=X3NJ2A7VDSABUI4URBWME2PZNM&pfId=the_only_tech_stocks_that_matter",
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) =>
    //     this.setState({
    //      setIsLoading(false),
    //       stockPortfolio: response.finance.result[0],
    //     })
    //   )
    //   .catch((err) => console.error(err));
  }

    return (
      <div style={{ display: "flex", height: 600, width: "100%" }}>
        <StockTabs></StockTabs>
        {/* <Button
          variant="contained"
          startIcon={<AddOutlined size="0.9rem" />}
          onClick={handleClickOpen}
        >
          Add Stock
        </Button>
        <div>
          <AddStockDialog
            open={open}
            handleClose={handleClose}
          />
        </div>
        <div>
          <StockLists portfolio={stockPortfolio} />
        </div>
        {isLoading ? (
          <LoadingButton
            loading
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Fetch data
          </LoadingButton>
        ) : (
          <div></div>
        )} */}
      </div>
    );
}

export default StocksProfile;
