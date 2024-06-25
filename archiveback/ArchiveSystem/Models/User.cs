namespace ArchiveSystem
{
    public class User
    {
        [Key]
        public Guid UserId { get; set; }

        public byte[] UserImage { get; set; }  

        [MaxLength(256)]
        public string Email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be between 8 and 100 characters.")]
        public string Password { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Confirm Password must be between 8 and 100 characters.")]
        public string ConfirmPassword { get; set; }

        [StringLength(100, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 100 characters.")]
        public string UserName { get; set; }

        public UserGender Gender { get; set; }

        [MaxLength(15)]
        public string PhoneNumber { get; set; }

        // Navigation properties
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<MeetingAttendance> MeetingAttendances { get; set; }
        public ICollection<Meeting> CreatedMeetings { get; set; }

        public User()
        {
            UserId = Guid.NewGuid();  // Assign a new GUID upon creation
            UserRoles = new List<UserRole>();
            UserMessages = new List<UserMessage>();
            MeetingAttendances = new List<MeetingAttendance>();
            CreatedMeetings = new List<Meeting>();
        }
    }
    public enum UserGender
    {
        Male,
        Female
    }

    public class LoginUser
    {
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class GetUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public byte[] UserImage { get; set; }
    }
}
