using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [ForeignKey("MessageAttach")]
        public int MessageId { get; set; }

        public Message Message { get; set; }
    }
}
