namespace ArchiveSystem
{
    public class Attachment
    {
        [Key]
        public int AttachmentId { get; set; }

        [AttachmentTypeValidation]
        public string AttachmentType { get; set; }

        [MaxLength(256)]
        public string FilePath { get; set; } 

        public string FileName { get; set; } 

        // Foreign key relationship
        [ForeignKey("Message")]
        public int MessageId { get; set; }

        // Navigation property
        public Message Message { get; set; }
    }
}
