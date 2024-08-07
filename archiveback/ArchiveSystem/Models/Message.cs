﻿namespace ArchiveSystem
{
    public class Message
    {
        public int MessageId { get; set; }
        public Guid UserId { get; set; }

        public MessageType MessageType { get; set; }
        public DateTime DateOfSend { get; set; }

        // Navigation properties
        public ICollection<UserMessage> UserMessages { get; set; }
        public ICollection<Attachment> Attachments { get; set; }
        public User User { get; set; }

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
