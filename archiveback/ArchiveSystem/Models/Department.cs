namespace ArchiveSystem
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }

        [Required]
        [MaxLength(100)]
        public string DepartmentName { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }

        public Department()
        {
            UserRoles = new List<UserRole>();
        }
    }
}
