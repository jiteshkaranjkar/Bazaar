using System;
using System.Collections.Generic;

namespace B.Domain.Stocks
{
    public class Portfolio
    {
        public Guid Id { get; set; }
        public string Symbol { get; set; }
        public string CurrentPrice { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public double? Change { get; set; }
        public double? Open { get; set; }
        public double? High { get; set; }
        public double? Low { get; set; }
        public double? Volume { get; set; }
        public string TradeDate { get; set; }
        public double? Purchase { get; set; }
        public double? Price { get; set; }
        public double? Quantity { get; set; }
        public double? Commission { get; set; }
        public double? HighLimit { get; set; }
        public double? LowLimit { get; set; }
        public string Comment { get; set; }
    }

    public class Portfolios
    {
        public List<Portfolio> Items { get; set; }
    }
}
