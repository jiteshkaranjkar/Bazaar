import React from "react";
import StockLists from "./StockLists";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

export class StocksPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      stockPortfolio: Object,
    };
  }

  componentDidMount() {
    this.GetStocksList();
  }

  GetStocksList() {
    //show progress bar
    this.setState({ isLoading: true });

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": "38cf53090fmsh0faab578421f033p164fafjsn73b543184b1a",
      },
    };

    fetch('https://yh-finance.p.rapidapi.com/market/get-watchlist-detail?userId=X3NJ2A7VDSABUI4URBWME2PZNM&pfId=the_only_tech_stocks_that_matter', options)
        .then(response => response.json())
        .then(response => this.setState({
            isLoading: false,
            stockPortfolio: response.finance.result[0]
        }))
        .catch(err => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <StockLists portfolio={this.state.stockPortfolio} />
        </div>
        {this.state.isLoading ? (
          <LoadingButton
            loading
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Fetch data
          </LoadingButton>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default StocksPortfolio;
