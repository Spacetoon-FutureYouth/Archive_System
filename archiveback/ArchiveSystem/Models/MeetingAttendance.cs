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
    public bool InvitationSent { get; set; } // New property to track invitation status

    public void MarkAttendance()
    {
        IsAttended = true;
    }
}
