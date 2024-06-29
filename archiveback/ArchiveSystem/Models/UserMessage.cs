namespace ArchiveSystem
{
    public class UserMessage
    {
        public Guid UserId { get; set; }
        public int MessageId { get; set; }

        public MessageState State { get; set; }
        public DateTime? DateOfSeen { get; set; }
        public DateTime DateOfRecieve { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Message Message { get; set; }
    }

    public enum MessageState
    {
        Seen,
        Non
    }
}
