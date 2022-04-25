using B.Domain.Customers;
using B.Infrastructure.Concretes;
using B.Infrastructure.Contracts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Infrastructure
{
  public class CustomersRepository : Repository<Customer>, ICustomersRepository
  {
    public CustomersRepository(): base()
    {
    }

    public Task<List<Customer>> GetAllCustomers()
    {
      throw new NotImplementedException();
    }

    public Task<Customer> GetCustomerById(int Id)
    {
      throw new NotImplementedException();
    }
  }
}