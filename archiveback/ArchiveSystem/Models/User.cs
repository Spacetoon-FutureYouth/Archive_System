namespace ArchiveSystem
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public bool Gender { get; set; }
        public string PhoneNumber { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }
        public ICollection<Meeting> CreatedMeetings { get; set; }

        public User()
        {
            UserRoles = new List<UserRole>();
            UserMessages = new List<UserMessage>();
            MeetingAttendances = new List<MeetingAttendance>();
            CreatedMeetings = new List<Meeting>();
        }
    }
}
