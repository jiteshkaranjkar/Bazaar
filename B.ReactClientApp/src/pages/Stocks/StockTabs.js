import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StocksPortfolio from "./StocksPortfolio";
import { FormatBoldRounded } from "@mui/icons-material";

export default function StockTabs() {
  const [value, setValue] = useState("IND");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    console.log(value);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:5000/api/stocks/portfolio?container=" + value,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => setPortfolio(response))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: { xs: 320, sm: 480 }, width: '100%', bgcolor: "background.paper" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Indian" value="IND" sx={{ fontSize: '1.2rem',fontWeight:'bold', color:'grey'}}/>
            <Tab label="Australian" value="AUS" />
            <Tab label="US" value="US" />
          </TabList>
        </Box>
        <TabPanel value="IND">
          <StocksPortfolio portfolio={portfolio[2]} name="Indian " />
        </TabPanel>
        <TabPanel value="US">
          <StocksPortfolio portfolio={portfolio[0]} name="US " />
        </TabPanel>
        <TabPanel value="AUS">
          <div>
            <StocksPortfolio portfolio={portfolio[1]} name="Australian " />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
