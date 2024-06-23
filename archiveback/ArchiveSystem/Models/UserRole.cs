using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [StringLength(50, MinimumLength = 3, ErrorMessage = "Role name must be between 3 and 50 characters.")]
        public string RoleName { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Department Department { get; set; }

    }
}
