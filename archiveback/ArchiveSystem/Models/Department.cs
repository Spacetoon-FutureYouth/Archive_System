namespace ArchiveSystem
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }

        public Department()
        {
            UserRoles = new List<UserRole>();
        }
    }
}
