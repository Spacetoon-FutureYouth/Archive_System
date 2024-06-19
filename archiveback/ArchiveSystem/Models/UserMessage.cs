namespace ArchiveSystem
{
    public class UserMessage
    {
        public int UserMessageId { get; set; }
        public int UserId { get; set; }
        public int MessageId { get; set; }
        public DateTime SentDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Message Message { get; set; }

    }
}
