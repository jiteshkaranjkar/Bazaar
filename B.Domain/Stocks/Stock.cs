using B.Domain.Customers;
using Newtonsoft.Json;
using System;

namespace B.Domain.Stocks
{
    public partial class Stock : BaseEntity
    {
        private int quantity;
        private decimal totalPrice;
        private decimal unitPrice;
        private decimal holdingPrice;

        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "symbol")]
        public string Symbol { get; init; }

        [JsonProperty(PropertyName = "longName")]
        public string LongName { get; init; }

        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }

        [JsonProperty(PropertyName = "totalPrice")]
        public decimal TotalPrice { get { return totalPrice; } private set { totalPrice = value; } }

        [JsonProperty(PropertyName = "unitPrice")]
        public decimal UnitPrice { get { return unitPrice; } set { unitPrice = value; UpdateTotalUnitPrice(); } }

        [JsonProperty(PropertyName = "holdingPrice")]
        public decimal HoldingPrice { get { return unitPrice; } set { unitPrice = value; UpdateTotalHoldingPrice(); } }

        [JsonProperty(PropertyName = "quantity")]
        public int Quantity { get { return quantity; } set { quantity = value; } }

        public void UpdateTotalUnitPrice()
        {
            totalPrice = unitPrice * quantity;
        }
        public void UpdateTotalHoldingPrice()
        {
            totalPrice = holdingPrice * quantity;
        }
    }

    public class StockRowEdit
    {
        public Guid Id { get; set; }
        public string PropertyName { get; init; }
        public string PropertyValue { get; init; }
    }

    public class StockEdit
    {
        public Stock Stock { get; set; }
        public StockRowEdit EditedData { get; set; }
    }
}
