using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArchiveSystem
{
    public class Meeting
    {
        [Key]
        public int MeetingId { get; set; }

        [Required]
        [MaxLength(256)]
        public string MeetingAddress { get; set; }

        [ForeignKey("User")]
        public Guid CreatorUserId { get; set; }  // Changed to GUID

        // Navigation properties
        public User Creator { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }

        public Meeting()
        {
            MeetingAttendances = new List<MeetingAttendance>();
        }
    }
}
