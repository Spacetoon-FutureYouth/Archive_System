using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public AdminsController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users.OrderBy(u => u.Username).ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromForm]UserDto dto)
        {
            var user = new User
            {
                Username = dto.Username,
                Email = dto.Email,
                Password = dto.Password,
                ConfirmPassword = dto.ConfirmPassword,
                PhoneNumber = dto.PhoneNumber,
                Gender = dto.Gender,
            };
            if (dto.UserImage != null)
            {
                using var dataStream = new MemoryStream();
                await dto.UserImage.CopyToAsync(dataStream);
                user.UserImage = dataStream.ToArray();
            }

            await _context.AddAsync(user);
            await _context.SaveChangesAsync(); 

            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, UserDto dto)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound($"No user with ID:{id}");

            if (dto.UserImage != null)
            {
                using var dataStream = new MemoryStream();
                await dto.UserImage.CopyToAsync(dataStream);
                user.UserImage = dataStream.ToArray();
            }

            user.Username = dto.Username;
            user.Email = dto.Email;
            user.Password = dto.Password;
            user.ConfirmPassword = dto.ConfirmPassword;
            user.PhoneNumber = dto.PhoneNumber;
            user.Gender = dto.Gender;

            await _context.SaveChangesAsync();

            return Ok(user);
        }


        [HttpDelete]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound($"No user with ID:{id}");

            _context.Remove(id);
            _context.SaveChanges();

            return Ok(user);
        }
    }
}
