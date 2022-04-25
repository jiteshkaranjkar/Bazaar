namespace B.Domain.Customers
{
    public class Customer : BaseEntity
  {
    public int Id { get; set; }
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public decimal portfolio { get; set; }

  }
}
