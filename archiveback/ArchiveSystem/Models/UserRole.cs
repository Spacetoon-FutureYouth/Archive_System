using System;

namespace ArchiveSystem
{
    public class UserRole
    {
        public Guid UserId { get; set; }
        public int DepartmentId { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Department Department { get; set; }
    }
}
