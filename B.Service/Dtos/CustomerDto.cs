using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace B.Application.Dtos
{
  public class CustomerDto
  {
    public int Id { get; set; }
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public decimal portfolio { get; set; }

  }
}
