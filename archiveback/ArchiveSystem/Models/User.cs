using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ArchiveSystem
{
    public class User
    {
        [Key]
        public Guid UserId { get; set; }  

        [Required]
        [MaxLength(256)]
        public string Email { get; set; }  

        [Required]
        [MaxLength(100)]
        public string Username { get; set; }

        public bool Gender { get; set; }

        [Required]
        [MaxLength(15)]
        public string PhoneNumber { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }
        public ICollection<Meeting> CreatedMeetings { get; set; }

        // Constructor
        public User()
        {
            UserId = Guid.NewGuid();  // Assign a new GUID upon creation
            UserRoles = new List<UserRole>();
            UserMessages = new List<UserMessage>();
            MeetingAttendances = new List<MeetingAttendance>();
            CreatedMeetings = new List<Meeting>();
        }

    }
}
