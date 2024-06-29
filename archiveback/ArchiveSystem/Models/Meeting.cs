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

        [StringLength(256, MinimumLength = 3, ErrorMessage = "Meeting title must be between 3 and 256 characters.")]
        public string MeetingTitle { get; set; }

        public DateTime AttendanceDate { get; set; }

        [StringLength(256)]
        public string Location { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        [ForeignKey("User")]
        public Guid CreatorUserId { get; set; }

        // Navigation properties
        public User Creator { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }

        public Meeting()
        {
            MeetingAttendances = new List<MeetingAttendance>();
        }

        // Computed property to get the number of attendees
        [NotMapped]
        public int AttendeesCount => MeetingAttendances.Count(ma => ma.IsAttended);
    }
}
