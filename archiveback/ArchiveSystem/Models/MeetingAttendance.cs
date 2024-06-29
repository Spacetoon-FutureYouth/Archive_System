using ArchiveSystem;

public class MeetingAttendance
{
    [Key]
    public int MeetingAttendanceId { get; set; }

    public int MeetingId { get; set; }
    public Meeting Meeting { get; set; }

    public Guid UserId { get; set; }
    public User User { get; set; }

    public bool IsAttended { get; set; }
}
