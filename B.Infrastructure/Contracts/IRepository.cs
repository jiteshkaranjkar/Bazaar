using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Infrastructure.Contracts
{
  public interface IRepository<TEntity>:  IDisposable
  {
    Task<TEntity> GetByIdAsync(int Id);
    List<TEntity> GetAllAsync();

    Task Add(TEntity entity);
    Task Delete(TEntity entity);
    Task Update(TEntity entity);

  }
}
