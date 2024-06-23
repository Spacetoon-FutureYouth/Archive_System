namespace ArchiveSystem
{
    public class Meeting
    {
        [Key]
        public int MeetingId { get; set; }

        [StringLength(256, MinimumLength = 3, ErrorMessage = "Meeting title must be between 3 and 256 characters.")]
        public string MeetingTitle { get; set; }

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
