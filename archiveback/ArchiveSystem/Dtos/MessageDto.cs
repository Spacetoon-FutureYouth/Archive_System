namespace ArchiveSystem.Dtos
{
    public class MessageDto
    {
        public string SenderName { get; set; }
        public string SenderEmail { get; set; }
        public DateTime DateOfSend { get; set; }
        public MessageType MessageType { get; set; }
        public bool Seen { get; set; }
        public DateTime? DateOfSeen { get; set; }
    }

    public class SendMessageDto
    {
        public Guid UserId { get; set; } // Sender's UserId (Guid)
        public MessageType MessageType { get; set; } // Type of message (assuming MessageType enum exists)
        public string Content { get; set; } // Message content
        public List<string> RecipientEmails { get; set; } // List of recipient emails
    }
}
