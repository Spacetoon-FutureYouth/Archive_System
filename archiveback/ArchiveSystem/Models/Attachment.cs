namespace ArchiveSystem
{
    public class Attachment
    {
        [Key]
        public int AttachmentId { get; set; }

        [Required]
        [MaxLength(50)]
        public string AttachmentType { get; set; }

        // Navigation property
        [ForeignKey("Message")]
        public int MessageId { get; set; }
        public Message Message { get; set; }
    }
}
