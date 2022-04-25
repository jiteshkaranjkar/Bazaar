import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import StocksPortfolio from './pages/StocksPortfolio/StocksPortfolio';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import StocksForm from './pages/AddStocks/StocksForm';
import Storage from './pages/Storage/Storage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="stocks-portfolio" element={<StocksPortfolio />} />
          <Route path="add-stocks" element={<StocksForm />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
