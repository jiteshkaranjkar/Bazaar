namespace B.Infrastructure.Contracts
{
  public interface IInventoryService
  {
    void NotifyStockPurchased(int stockId, int quantity, decimal unitPrice);
  }
}
