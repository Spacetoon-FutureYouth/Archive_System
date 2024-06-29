using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Threading.Tasks;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly long _maxFileSize = 2 * 1024 * 1024; // 2 MB
        private readonly string[] _allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };

        public AdminsController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users.AsNoTracking().OrderBy(u => u.Username).ToListAsync();
            return Ok(users);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(Guid id)
        {
            var user = await _context.Users.AsNoTracking().SingleOrDefaultAsync(u=>u.UserId == id);
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromForm] UserDto dto)
        {
            if (dto.Password != dto.ConfirmPassword)
            {
                return BadRequest("Password and Confirm Password do not match.");
            }           

            string hashedPassword = HashPassword(dto.Password);

            var user = new User
            {
                Username = dto.UserName,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                Gender = dto.Gender,
                Image = dto.Image,
                Password = hashedPassword
            };

            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, [FromForm] UserDto dto)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound($"No user with ID:{id}");

            if (dto.Password != dto.ConfirmPassword)
            {
                return BadRequest("Password and Confirm Password do not match.");
            }

            user.Username = dto.UserNpublic async Task<IActionResult> GetDelUserMesg(Guid adminId, Guid userId)
            {
                // Check if the user is an admin
                var admin = await _context.Users
                    .Where(u => u.UserId == adminId && u.UserAutho == UserAutho.Admin)
                    .FirstOrDefaultAsync();

                if (admin == null)
                {
                    return Unauthorized("Access denied. User is not an admin.");
                }

                // Retrieve deleted messages for the specific user
                var deletedUserMessages = await _context.UserMessages
                    .Where(um => um.UserId == userId && um.Message.User.UserState == UserState.Deleted) // Filter based on UserState.Deleted
                    .Include(um => um.Message)
                    .ThenInclude(m => m.User) // Include sender details if needed
                    .Select(um => new
                    {
                        MessageId = um.MessageId,
                        SenderName = um.Message.User.Username,
                        SenderEmail = um.Message.User.Email,
                        DateOfSend = um.Message.DateOfSend,
                        MessageType = um.Message.MessageType,
                        Seen = um.State == MessageState.Seen, // Adjust as per your logic for UserMessage state
                        DateOfSeen = um.DateOfSeen // Adjust as per your logic for UserMessage state
                                                   // Add more properties as needed
                    })
                    .ToListAsync();

                return Ok(deletedUserMessages);
            }
            public async Task<IActionResult> GetDelUserMesg(Guid adminId, Guid userId)
            {
                // Check if the user is an admin
                var admin = await _context.Users
                    .Where(u => u.UserId == adminId && u.UserAutho == UserAutho.Admin)
                    .FirstOrDefaultAsync();

                if (admin == null)
                {
                    return Unauthorized("Access denied. User is not an admin.");
                }

                // Retrieve deleted messages for the specific user
                var deletedUserMessages = await _context.UserMessages
                    .Where(um => um.UserId == userId && um.Message.User.UserState == UserState.Deleted) // Filter based on UserState.Deleted
                    .Include(um => um.Message)
                    .ThenInclude(m => m.User) // Include sender details if needed
                    .Select(um => new
                    {
                        MessageId = um.MessageId,
                        SenderName = um.Message.User.Username,
                        SenderEmail = um.Message.User.Email,
                        DateOfSend = um.Message.DateOfSend,
                        MessageType = um.Message.MessageType,
                        Seen = um.State == MessageState.Seen, // Adjust as per your logic for UserMessage state
                        DateOfSeen = um.DateOfSeen // Adjust as per your logic for UserMessage state
                                                   // Add more properties as needed
                    })
                    .ToListAsync();

                return Ok(deletedUserMessages);
            }
            public async Task<IActionResult> GetDelUserMesg(Guid adminId, Guid userId)
            {
                // Check if the user is an admin
                var admin = await _context.Users
                    .Where(u => u.UserId == adminId && u.UserAutho == UserAutho.Admin)
                    .FirstOrDefaultAsync();

                if (admin == null)
                {
                    return Unauthorized("Access denied. User is not an admin.");
                }

                // Retrieve deleted messages for the specific user
                var deletedUserMessages = await _context.UserMessages
                    .Where(um => um.UserId == userId && um.Message.User.UserState == UserState.Deleted) // Filter based on UserState.Deleted
                    .Include(um => um.Message)
                    .ThenInclude(m => m.User) // Include sender details if needed
                    .Select(um => new
                    {
                        MessageId = um.MessageId,
                        SenderName = um.Message.User.Username,
                        SenderEmail = um.Message.User.Email,
                        DateOfSend = um.Message.DateOfSend,
                        MessageType = um.Message.MessageType,
                        Seen = um.State == MessageState.Seen, // Adjust as per your logic for UserMessage state
                        DateOfSeen = um.DateOfSeen // Adjust as per your logic for UserMessage state
                                                   // Add more properties as needed
                    })
                    .ToListAsync();

                return Ok(deletedUserMessages);
            }
            public async Task<IActionResult> GetDelUserMesg(Guid adminId, Guid userId)
            {
                // Check if the user is an admin
                var admin = await _context.Users
                    .Where(u => u.UserId == adminId && u.UserAutho == UserAutho.Admin)
                    .FirstOrDefaultAsync();

                if (admin == null)
                {
                    return Unauthorized("Access denied. User is not an admin.");
                }

                // Retrieve deleted messages for the specific user
                var deletedUserMessages = await _context.UserMessages
                    .Where(um => um.UserId == userId && um.Message.User.UserState == UserState.Deleted) // Filter based on UserState.Deleted
                    .Include(um => um.Message)
                    .ThenInclude(m => m.User) // Include sender details if needed
                    .Select(um => new
                    {
                        MessageId = um.MessageId,
                        SenderName = um.Message.User.Username,
                        SenderEmail = um.Message.User.Email,
                        DateOfSend = um.Message.DateOfSend,
                        MessageType = um.Message.MessageType,
                        Seen = um.State == MessageState.Seen, // Adjust as per your logic for UserMessage state
                        DateOfSeen = um.DateOfSeen // Adjust as per your logic for UserMessage state
                                                   // Add more properties as needed
                    })
                    .ToListAsync();

                return Ok(deletedUserMessages);
            }
            ame ?? user.Username;
            ame ?? user.Username;
            ame ?? user.Username;
            ame ?? user.Username;
            ame ?? user.Username;
            ame ?? user.Username;
            ame ?? user.Username;
            ame[HttpGet("GetImport ?? user.Username;
            user.Email = dto.Email ?? user.Email;
            user.PhoneNumber = dto.PhoneNumber ?? user.PhoneNumber;
            user.Image = dto.Image ?? user.Image;
            user.Gender = dto.Gender;
            if (!string.IsNullOrEmpty(dto.Password) && user.Password != HashPassword(dto.Password))
            {
                user.Password = HashPassword(dto.Password);
            }

            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("AddProfileImage")]
        public async Task<ActionResult> AddProfileImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            if (!IsImage(file) || file.Length > _maxFileSize)
            {
                return BadRequest("Invalid image file.");
            }

            string uniqueFileName = await SaveImageAsync(file);
            return Ok(new { FileName = uniqueFileName });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound($"No user with ID:{id}");

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private async Task<string> SaveImageAsync(IFormFile file)
        {
            string imagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Images");
            if (!Directory.Exists(imagesDirectory))
            {
                Directory.CreateDirectory(imagesDirectory);
            }

            string uniqueFileName = DateTime.Now.Ticks.ToString() + Path.GetExtension(file.FileName);
            string filePath = Path.Combine(imagesDirectory, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return uniqueFileName;
        }

        private bool IsImage(IFormFile file)
        {
            string extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            return _allowedExtensions.Contains(extension);
        }

        private string HashPassword(string password)
        {
            return password; // Replace this with actual hashing logic
        }
    }
}
