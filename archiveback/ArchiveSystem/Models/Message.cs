namespace ArchiveSystem
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        public MessageType MessageType { get; set; }
        [Required]
        public string MesgDescription { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }

        public User User { get; set; }
        // Navigation properties
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<Attachment> Attachments { get; set; }

        public Message()
        {
            UserMessages = new List<UserMessage>();
            Attachments = new List<Attachment>();
        }
    }

    public enum MessageType
    {
        Report,
        MeetingDate
    }
    public enum MessageState
    {
        Send,
        Receive
    }

    public class GetMessage
    {
        public MessageType MessageType { get; set; }
        public string MesgDescription { get; set; }
    }
}
