namespace ArchiveSystem
{
    public class User
    {
        public Guid UserId { get; set; }

        public string Image { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be between 8 and 100 characters.")]
        public string Password { get; set; }

        [StringLength(100, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 100 characters.")]
        public string Username { get; set; }

        [MaxLength(15)]
        public string PhoneNumber { get; set; }

        public UserGender Gender { get; set; }
        public UserState UserState { get; set; }
        public UserAutho UserAutho { get; set; }
      

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }
        public ICollection<Meeting> CreatedMeetings { get; set; }
        public ICollection<Message> Messages { get; set; }


        public User()
        {
            UserId = Guid.NewGuid();  // Assign a new GUID upon creation
            UserRoles = new List<UserRole>();
            UserMessages = new List<UserMessage>();
            MeetingAttendances = new List<MeetingAttendance>();
            CreatedMeetings = new List<Meeting>();
            Messages = new List<Message>();
        }
    }
    public enum UserGender
    {
        Male,
        Female
    }

    public enum UserState
    {
        Active,
        Deleted
    }
    public enum UserAutho
    {
        User,
        Admin
    }
}
