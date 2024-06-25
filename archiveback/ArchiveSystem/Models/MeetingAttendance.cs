namespace ArchiveSystem
{
    public class MeetingAttendance
    {

        public int MeetingId { get; set; }

        public Guid UserId { get; set; }  // Changed to GUID

        // Navigation properties
        public User User { get; set; }
        public Meeting Meeting { get; set; }

    }
}
