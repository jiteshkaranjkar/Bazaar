using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace B.Common.Exceptions
{
  public class BadRequestException
  {
    private string _message;
    public BadRequestException(Exception exp, String message)
    {
      _message = message;
    }
  }
}
