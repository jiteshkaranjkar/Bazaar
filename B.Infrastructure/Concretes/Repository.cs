using B.Infrastructure.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Infrastructure.Concretes
{
  public class Repository<T> : IRepository<T>
  {
    public Repository()
    {
    }

    public Task Add(T entity)
    {
      throw new System.NotImplementedException();
    }

    public Task Delete(T entity)
    {
      throw new System.NotImplementedException();
    }

    public void Dispose()
    {
      throw new System.NotImplementedException();
    }

    public List<T> GetAllAsync()
    {
      throw new System.NotImplementedException();
    }

    public Task<T> GetByIdAsync(int Id)
    {
      throw new System.NotImplementedException();
    }

    public Task Update(T entity)
    {
      throw new System.NotImplementedException();
    }
  }
}
