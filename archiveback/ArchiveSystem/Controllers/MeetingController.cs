using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArchiveSystem.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public MeetingController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMeetings()
        {
            var meetings = await _context.Meetings
                .Include(m => m.Creator)
                .Include(m => m.MeetingAttendances)
                .ThenInclude(ma => ma.User)
                .ToListAsync();

            var meetingDtos = meetings.Select(m => new MeetingDto
            {
                MeetingId = m.MeetingId,
                MeetingTitle = m.MeetingTitle,
                AttendanceDate = m.AttendanceDate,
                Location = m.Location,
                Description = m.Description,
                CreatorUserId = m.CreatorUserId,
                Creator = new UserDto
                {
                    Image = m.Creator.Image,
                    Email = m.Creator.Email,
                    Password = m.Creator.Password,
                    ConfirmPassword = m.Creator.Password,
                    UserName = m.Creator.Username,
                    Gender = m.Creator.Gender,
                    PhoneNumber = m.Creator.PhoneNumber
                },
                MeetingAttendances = m.MeetingAttendances.Select(ma => new MeetingAttendanceDto
                {
                    UserId = ma.UserId,
                    MeetingId = ma.MeetingId,
                    User = new UserDto
                    {
                        Image = ma.User.Image,
                        Email = ma.User.Email,
                        Password = ma.User.Password,
                        ConfirmPassword = ma.User.Password,
                        UserName = ma.User.Username,
                        Gender = ma.User.Gender,
                        PhoneNumber = ma.User.PhoneNumber
                    }
                }).ToList()
            }).ToList();

            return Ok(meetingDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMeetingById(int id)
        {
            var meeting = await _context.Meetings
                .Include(m => m.Creator)
                .Include(m => m.MeetingAttendances)
                .ThenInclude(ma => ma.User)
                .FirstOrDefaultAsync(m => m.MeetingId == id);

            if (meeting == null)
                return NotFound($"No meeting with ID {id}");

            var meetingDto = new MeetingDto
            {
                MeetingId = meeting.MeetingId,
                MeetingTitle = meeting.MeetingTitle,
                AttendanceDate = meeting.AttendanceDate,
                Location = meeting.Location,
                Description = meeting.Description,
                CreatorUserId = meeting.CreatorUserId,
                Creator = new UserDto
                {
                    Image = meeting.Creator.Image,
                    Email = meeting.Creator.Email,
                    Password = meeting.Creator.Password,
                    ConfirmPassword = meeting.Creator.Password,
                    UserName = meeting.Creator.Username,
                    Gender = meeting.Creator.Gender,
                    PhoneNumber = meeting.Creator.PhoneNumber
                },
                MeetingAttendances = meeting.MeetingAttendances.Select(ma => new MeetingAttendanceDto
                {
                    UserId = ma.UserId,
                    MeetingId = ma.MeetingId,
                    User = new UserDto
                    {
                        Image = ma.User.Image,
                        Email = ma.User.Email,
                        Password = ma.User.Password,
                        ConfirmPassword = ma.User.Password,
                        UserName = ma.User.Username,
                        Gender = ma.User.Gender,
                        PhoneNumber = ma.User.PhoneNumber
                    }
                }).ToList()
            };

            return Ok(meetingDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMeeting(MeetingDto meetingDto)
        {
            try
            {
                // Check if the creator exists
                var creator = await _context.Users.FindAsync(meetingDto.CreatorUserId);
                if (creator == null)
                {
                    return BadRequest($"User with ID {meetingDto.CreatorUserId} not found.");
                }

                // Create new Meeting object
                var meeting = new Meeting
                {
                    MeetingTitle = meetingDto.MeetingTitle,
                    AttendanceDate = meetingDto.AttendanceDate,
                    Location = meetingDto.Location,
                    Description = meetingDto.Description,
                    CreatorUserId = meetingDto.CreatorUserId,
                    Creator = creator, // Set the creator
                    MeetingAttendances = meetingDto.MeetingAttendances.Select(dto => new MeetingAttendance
                    {
                        UserId = dto.UserId,
                        // MeetingId will be set by EF Core when saved
                    }).ToList()
                };

                // Add meeting to context and save changes
                _context.Meetings.Add(meeting);
                await _context.SaveChangesAsync();

                // Return the created meeting with HTTP status 201 Created
                return CreatedAtAction(nameof(GetMeetingById), new { id = meeting.MeetingId }, meeting);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMeeting(int id, MeetingDto meetingDto)
        {
            var meeting = await _context.Meetings
                .Include(m => m.MeetingAttendances)
                .FirstOrDefaultAsync(m => m.MeetingId == id);

            if (meeting == null)
                return NotFound($"No meeting with ID {id}");

            meeting.MeetingTitle = meetingDto.MeetingTitle;
            meeting.AttendanceDate = meetingDto.AttendanceDate;
            meeting.Location = meetingDto.Location;
            meeting.Description = meetingDto.Description;
            meeting.CreatorUserId = meetingDto.CreatorUserId;

            meeting.MeetingAttendances = meetingDto.MeetingAttendances.Select(ma => new MeetingAttendance
            {
                UserId = ma.UserId,
                MeetingId = ma.MeetingId
            }).ToList();

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeeting(int id)
        {
            var meeting = await _context.Meetings.FindAsync(id);

            if (meeting == null)
                return NotFound($"No meeting with ID {id}");

            _context.Meetings.Remove(meeting);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("attend")]
        public async Task<IActionResult> MarkAttendance(AttendanceDto attendanceDto)
        {
            try
            {
                var meeting = await _context.Meetings.FindAsync(attendanceDto.MeetingId);
                if (meeting == null)
                {
                    return NotFound($"Meeting with ID {attendanceDto.MeetingId} not found.");
                }

                var user = await _context.Users.FindAsync(attendanceDto.UserId);
                if (user == null)
                {
                    return NotFound($"User with ID {attendanceDto.UserId} not found.");
                }

                var existingAttendance = await _context.MeetingAttendances
                    .FirstOrDefaultAsync(ma => ma.MeetingId == attendanceDto.MeetingId && ma.UserId == attendanceDto.UserId);

                if (existingAttendance != null)
                {
                    existingAttendance.MarkAttendance();
                }
                else
                {
                    var newAttendance = new MeetingAttendance
                    {
                        MeetingId = attendanceDto.MeetingId,
                        UserId = attendanceDto.UserId,
                        IsAttended = true // Assuming default to true for attendance
                    };
                    _context.MeetingAttendances.Add(newAttendance);
                }

                await _context.SaveChangesAsync();

                return Ok("Attendance marked successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("invitationcount/{meetingId}")]
        public async Task<IActionResult> GetInvitationCount(int meetingId)
        {
            try
            {
                // Retrieve the meeting from the database
                var meeting = await _context.Meetings
                    .Include(m => m.MeetingAttendances)
                    .FirstOrDefaultAsync(m => m.MeetingId == meetingId);

                if (meeting == null)
                    return NotFound($"Meeting with ID {meetingId} not found.");

                // Calculate the invitation count
                int invitationCount = meeting.MeetingAttendances.Count();

                // Create a DTO to return the result
                var invitationCountDto = new MeetingInvitationCountDto
                {
                    MeetingId = meeting.MeetingId,
                    InvitationCount = invitationCount
                };

                return Ok(invitationCountDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("acceptedinvitationcount/{meetingId}")]
        public async Task<IActionResult> GetAcceptedInvitationCount(int meetingId)
        {
            try
            {
                var meeting = await _context.Meetings
                    .Include(m => m.MeetingAttendances)
                    .FirstOrDefaultAsync(m => m.MeetingId == meetingId);

                if (meeting == null)
                    return NotFound($"Meeting with ID {meetingId} not found.");

                // Calculate the accepted invitation count
                int acceptedInvitationCount = meeting.MeetingAttendances
                    .Count(ma => ma.IsAttended); // Assuming IsAccepted indicates acceptance

                // Create a DTO to return the result
                var acceptedInvitationCountDto = new MeetingAcceptedInvitationCountDto
                {
                    MeetingId = meeting.MeetingId,
                    AcceptedInvitationCount = acceptedInvitationCount
                };

                return Ok(acceptedInvitationCountDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


    }
}
