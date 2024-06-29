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
    }
}
