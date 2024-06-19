namespace ArchiveSystem
{
    public class MeetingAttendance
    {
        public int MeetingAttendanceId { get; set; }
        public int MeetingId { get; set; }
        public int UserId { get; set; }
        public DateTime AttendanceDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Meeting Meeting { get; set; }

    }
}
