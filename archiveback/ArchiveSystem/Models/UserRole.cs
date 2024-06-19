namespace ArchiveSystem
{
    public class UserRole
    {
        [Key]
        public int UserRoleId { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }  // Changed to GUID

        [ForeignKey("Department")]
        public int DepartmentId { get; set; }

        [Required]
        [MaxLength(50)]
        public string RoleName { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Department Department { get; set; }

        public void AddUser()
        {
            // Implementation for adding a new user
        }

        public void DeleteUser()
        {
            // Implementation for deleting a user
        }

        public void UpdateUser()
        {
            // Implementation for updating user details
        }
    }
}
