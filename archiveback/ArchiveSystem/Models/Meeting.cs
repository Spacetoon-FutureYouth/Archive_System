namespace ArchiveSystem
{
    public class Meeting
    {
        public int MeetingId { get; set; }
        public string MeetingAddress { get; set; }
        public int CreatorUserId { get; set; }

        // Navigation properties
        public User Creator { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }

        public Meeting()
        {
            MeetingAttendances = new List<MeetingAttendance>();
        }
    }
}
