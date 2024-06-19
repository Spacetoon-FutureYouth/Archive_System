namespace ArchiveSystem
{
    public class Attachment
    {
        public int AttachmentId { get; set; }
        public string AttachmentType { get; set; }

        // Navigation property
        public Message Message { get; set; }
    }
}
