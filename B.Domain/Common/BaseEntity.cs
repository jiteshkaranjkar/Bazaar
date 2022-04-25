using System;
using System.ComponentModel.DataAnnotations;

namespace B.Domain
{
  public abstract class BaseEntity
  {
    [Key]
    int Id { get; set; }
    public bool IsDeleted { get; set; }
    public string CreatedBy { get; set; }
    public DateTime Created { get; set; }
    public string LastModifiedBy { get; set; }
    public DateTime LastModified { get; set; }
  }
}
