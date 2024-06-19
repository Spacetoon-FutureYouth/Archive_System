namespace ArchiveSystem
{
    public class UserRole
    {
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int DepartmentId { get; set; }
        public string RoleName { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Department Department { get; set; }
    }
}
