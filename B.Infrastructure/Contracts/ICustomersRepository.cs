using B.Domain.Customers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Infrastructure.Contracts
{
  public interface ICustomersRepository : IRepository<Customer>
  {
    Task<Customer> GetCustomerById(int Id);
    Task<List<Customer>> GetAllCustomers();
  }
}
