namespace ArchiveSystem
{
    public class UserMessage
    {
        [Key]
        public int UserMessageId { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }  

        [ForeignKey("Message")]
        public int MessageId { get; set; }

        public DateTime SentDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Message Message { get; set; }

    }
}
