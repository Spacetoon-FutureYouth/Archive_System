public class MeetingAttendanceDto
{
    public Guid UserId { get; set; }
    public int MeetingId { get; set; }
    public UserDto User { get; set; }
}

public class MeetingInvitationCountDto
{
    public int MeetingId { get; set; }
    public int InvitationCount { get; set; }
}

public class MeetingAcceptedInvitationCountDto
{
    public int MeetingId { get; set; }
    public int AcceptedInvitationCount { get; set; }
}
