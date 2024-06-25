namespace ArchiveSystem
{
    public class MeetingAttendance
    {
        [Key]
        public int MeetingAttendanceId { get; set; }

        [ForeignKey("Meeting")]
        public int MeetingId { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }  // Changed to GUID

        public DateTime AttendanceDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Meeting Meeting { get; set; }

    }
}
