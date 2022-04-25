using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using B.Infrastructure.Contracts;
using B.Domain.Stocks;

namespace B.Infrastructure
{
  public class StocksRepository : IStocksRepository
  {
    private List<Stock> Stocks { get; set; }

    public StocksRepository()
    {
      LoadStocks();
    }

    public void LoadStocks()
    {
      Stock stock = new Stock("TCS", 10, 2022);
      Stocks.Add(stock);
      stock = new Stock("ÌNFY", 8, 1323);
      Stocks.Add(stock);
      stock = new Stock("WIPRO", 13, 768);
      Stocks.Add(stock);
    }

    public Task Add(Stock entity)
    {
      throw new NotImplementedException();
    }

    public Task Delete(Stock entity)
    {
      throw new NotImplementedException();
    }

    public void Dispose()
    {
      throw new NotImplementedException();
    }

    public List<Stock> GetAllAsync()
    {
      throw new NotImplementedException();
    }

    public List<Stock> GetAllStocks()
    {
      LoadStocks();
      return Stocks;
    }

    public Task<Stock> GetByIdAsync(int Id)
    {
      throw new NotImplementedException();
    }

    public Task<Stock> GetStockById(int Id)
    {
      throw new NotImplementedException();
    }

    public Task Update(Stock entity)
    {
      throw new NotImplementedException();
    }
  }
}
