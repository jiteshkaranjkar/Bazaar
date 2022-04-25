using B.Application.Contracts;
using B.Application.Dtos;
using B.Domain.Customers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Application.Concretes
{
    public class CustomerService : ICustomerService
    {
        //private readonly IUnitOfWork _unitOfWork;
        //private readonly IMapper _mapper;

        public CustomerService()
        {
        }


        public Task CreateCustomerAsync(CustomerDto customerDto)
        {
            return null;
            //var entity = _mapper.Map<Customer>(customerDto);
            //_unitOfWork.CustomersRepo.Add(entity);

            //return _unitOfWork.SaveChangesAsync();
        }

        public Task<Customer> GetCustomerById(int Id)
        {
            return null;
        }

        public Task<List<Customer>> GetAllCustomers()
        {
            return null;
        }
    }
}
