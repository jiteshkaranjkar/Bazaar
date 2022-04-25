using System;

namespace B.Domain.Stocks
{
    public partial class Stock
    {
        public Stock(string symbol, int quantity, decimal unitPrice) : base()
        {
            Id = Guid.NewGuid();
            Symbol = symbol;
            Quantity = quantity;
            UnitPrice = unitPrice;
            Date = DateTime.Now;
        }

        public bool ValidateStockOnAdd()
        {
            return !string.IsNullOrEmpty(Symbol) && Quantity != 0 && UnitPrice != 0;
        }
    }
}
