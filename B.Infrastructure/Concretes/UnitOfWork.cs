using B.Infrastructure.Contracts;
using System;
using System.Threading.Tasks;

namespace B.Infrastructure
{
  public class UnitOfWork : IUnitOfWork
  {
    private bool _disposed;
    public IStocksRepository StocksRepo { get; private set; }
    public ICustomersRepository CustomersRepo { get; private set; }
    public UnitOfWork()
    {
      StocksRepo = new StocksRepository();
      CustomersRepo = new CustomersRepository();
    }

    public virtual void Dispose(bool disposed)
    {
      if (_disposed)
      {
        if (disposed)
        {
          //_appContext.Dispose();
        }
      }
      _disposed = true;
    }

    public void Dispose()
    {
      Dispose(true);

      GC.SuppressFinalize(this);
    }
  }
}