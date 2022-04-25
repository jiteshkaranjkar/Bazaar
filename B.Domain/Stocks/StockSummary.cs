namespace B.Domain
{
    public class StockSummary
    {
        public string Symbol { get; set; }
        public quoteType quoteType { get; set; }
        public summaryDetail summaryDetail { get; set; }

        public dynamic defaultKeyStatistics { get; set; }
        public dynamic details { get; set; }
        public dynamic summaryProfile { get; set; }
        public dynamic recommendationTrend { get; set; }
        public dynamic financialsTemplate { get; set; }
        public dynamic majorDirectHolders { get; set; }
        public dynamic earnings { get; set; }
        public dynamic price { get; set; }
        public dynamic fundOwnership { get; set; }
        public dynamic insiderTransactions { get; set; }
        public dynamic insiderHolders { get; set; }
        public dynamic netSharePurchaseActivity { get; set; }
        public dynamic majorHoldersBreakdown { get; set; }
        public dynamic financialData { get; set; }

        public dynamic institutionOwnership { get; set; }
        public dynamic calendarEvents { get; set; }
        public dynamic esgScores { get; set; }
        public dynamic upgradeDowngradeHistory { get; set; }
        public dynamic pageViews { get; set; }
    }


    public class quoteType
    {
        public string exchange { get; set; }
        public string shortName { get; set; }
        public string longName { get; set; }
        public string exchangeTimezoneName { get; set; }
        public string exchangeTimezoneShortName { get; set; }
        public bool isEsgPopulated { get; set; }
        public string gmtOffSetMilliseconds { get; set; }
        public string quote_Type { get; set; }
        public string symbol { get; set; }
        public string market { get; set; }
    }

    public class summaryDetail
    {
        public dynamic previousClose { get; set; }
        public dynamic regularMarketOpen { get; set; }
        public dynamic twoHundredDayAverage { get; set; }
        public dynamic trailingAnnualDividendYield { get; set; }
        public dynamic payoutRatio { get; set; }
        public dynamic volume24Hr { get; set; }
        public dynamic regularMarketDayHigh { get; set; }
        public dynamic navPrice { get; set; }
        public dynamic averageDailyVolume10Day { get; set; }
        public dynamic totalAssets { get; set; }
        public dynamic regularMarketPreviousClose { get; set; }
        public dynamic fiftyDayAverage { get; set; }
        public dynamic trailingAnnualDividendRate { get; set; }
        public dynamic open { get; set; }
        public dynamic toCurrency { get; set; }
        public dynamic averageVolume10days { get; set; }
        public dynamic expireDate { get; set; }
        public dynamic yield { get; set; }
        public dynamic algorithm { get; set; }
        public dynamic dividendRate { get; set; }
        public dynamic exDividendDate { get; set; }
        public dynamic beta { get; set; }
        public dynamic circulatingSupply { get; set; }
        public dynamic startDate { get; set; }
        public dynamic regularMarketDayLow { get; set; }
        public dynamic priceHint { get; set; }
        public dynamic currency { get; set; }
        public dynamic trailingPE { get; set; }
        public dynamic regularMarketVolume { get; set; }
        public dynamic lastMarket { get; set; }
        public dynamic maxSupply { get; set; }
        public dynamic openInterest { get; set; }
        public dynamic marketCap { get; set; }
        public dynamic volumeAllCurrencies { get; set; }
        public dynamic strikePrice { get; set; }
        public dynamic averageVolume { get; set; }
        public dynamic priceToSalesTrailing12Months { get; set; }
        public dynamic dayLow { get; set; }
        public dynamic ask { get; set; }
        public dynamic ytdReturn { get; set; }
        public dynamic askSize { get; set; }
        public dynamic volume { get; set; }
        public dynamic fiftyTwoWeekHigh { get; set; }
        public dynamic forwardPE { get; set; }
        public dynamic maxAge { get; set; }
        public dynamic fromCurrency { get; set; }
        public dynamic fiveYearAvgDividendYield { get; set; }
        public dynamic fiftyTwoWeekLow { get; set; }
        public dynamic bid { get; set; }
        public dynamic tradeable { get; set; }
        public dynamic dividendYield { get; set; }
        public dynamic bidSize { get; set; }
        public dynamic dayHigh { get; set; }
    }

}
