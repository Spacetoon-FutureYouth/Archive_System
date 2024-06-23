namespace ArchiveSystem
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }

        public MessageType MessageType { get; set; }

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
}
