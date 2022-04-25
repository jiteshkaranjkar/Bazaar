using B.Application.Dtos;
using B.Domain.Customers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Application.Contracts
{
  public interface ICustomerService 
  {
    Task CreateCustomerAsync(CustomerDto customerDto);
    Task<Customer> GetCustomerById(int Id);
    Task<List<Customer>> GetAllCustomers();
  }
}
