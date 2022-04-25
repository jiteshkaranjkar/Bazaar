using System;
using System.Threading.Tasks;

namespace B.Infrastructure.Contracts
{
  public interface IUnitOfWork : IDisposable
  {
    IStocksRepository StocksRepo { get; }
    ICustomersRepository CustomersRepo { get; }

    //Task<int> SaveChangesAsync();
  }
}
