using System;

namespace ArchiveSystem
{
    public class MeetingAttendance
    {
        public Guid UserId { get; set; }
        public int MeetingId { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Meeting Meeting { get; set; }
    }
}
