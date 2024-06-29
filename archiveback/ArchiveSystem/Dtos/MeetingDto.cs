public class MeetingDto
{
    public int MeetingId { get; set; }
    public string MeetingTitle { get; set; }
    public DateTime AttendanceDate { get; set; }
    public string Location { get; set; }
    public string Description { get; set; }
    public Guid CreatorUserId { get; set; }
    public UserDto Creator { get; set; }
    public List<MeetingAttendanceDto> MeetingAttendances { get; set; }
}