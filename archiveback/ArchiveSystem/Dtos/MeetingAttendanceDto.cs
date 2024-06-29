public class MeetingAttendanceDto
{
    public Guid UserId { get; set; }
    public int MeetingId { get; set; }
    public UserDto User { get; set; }
}