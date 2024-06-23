namespace ArchiveSystem
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }

        [StringLength(100, MinimumLength = 3, ErrorMessage = "Department name must be between 3 and 100 characters.")]
        public string DepartmentName { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }

        public Department()
        {
            UserRoles = new List<UserRole>();
        }
    }
}
