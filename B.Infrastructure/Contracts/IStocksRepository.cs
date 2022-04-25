using B.Domain.Stocks;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Infrastructure.Contracts
{
  public interface IStocksRepository : IRepository<Stock>
  {
    Task<Stock> GetStockById(int Id);
    List<Stock> GetAllStocks();

  }
}