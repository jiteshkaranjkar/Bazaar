using B.Domain.Customers;
using System;

namespace B.Application.Dtos
{
  public class StockDto : BaseDto
  {
    public int AccountId { get; set; }

    public string Symbol { get; set; }

    public string Name { get; set; }
    
    public decimal TotalPrice { get;  set; }
    
    public decimal UnitPrice { get; set; }
    
    public int Quantity { get; set; }
    
    public DateTime PurchaseDate { get; set; }

    public Customer Customer { get; set; }

  }
}
