using B.Domain.Customers;
using Newtonsoft.Json;
using System;

namespace B.Domain.Stocks
{
    public partial class Stock : BaseEntity
    {
        private int _quantity;
        private decimal _totalPrice;
        private decimal _unitPrice;

        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "symbol")]
        public string Symbol { get; init; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; init; }

        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }
        [JsonProperty(PropertyName = "totalPrice")]
        public decimal TotalPrice { get { return _totalPrice; } private set { _totalPrice = value; } }
        [JsonProperty(PropertyName = "unitPrice")]
        public decimal UnitPrice { get { return _unitPrice; } set { _unitPrice = value; } }
        [JsonProperty(PropertyName = "quantity")]
        public int Quantity { get { return _quantity; } set { _quantity = value; UpdateTotalPrice(); } }

        public void UpdateTotalPrice()
        {
            _totalPrice = _unitPrice * _quantity;
        }
    }
}
