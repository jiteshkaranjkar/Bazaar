using B.Application.Dtos;
using B.Domain.Stocks;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Application.Contracts
{
    public interface IStockService
    {
        Task<List<Stock>> GetStocksAsync(string query);
        Task<Stock> GetStockById(string id);
        Task AddStock(Stock stock);
        Task UpdateStock(Stock stock);
        Task DeleteStock(string id);

  }
}
