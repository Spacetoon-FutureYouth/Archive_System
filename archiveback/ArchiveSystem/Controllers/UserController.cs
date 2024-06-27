using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public UsersController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LogIn(UserLoginDto dto)
        {
            var account = await _context.Users.FirstOrDefaultAsync(account =>
                account.Email == dto.Email &&
                account.Password == dto.Password);

            if (account == null)
            {
                return BadRequest("Invalid email, username, or password.");
            }

            // Set a cookie with user ID
            Response.Cookies.Append("UserID", account.UserId.ToString(), new CookieOptions
            {
                HttpOnly = true,
                Secure = true // Make sure to set Secure to true in production for HTTPS
            });

            return Ok(new
            {
                account.UserId,
                account.Username,
                account.Email,
                account.Image
            });
        }
      
        [HttpPost("Logout")]
        public IActionResult LogOut()
        {
            // Remove the UserID cookie
            if (Request.Cookies.ContainsKey("UserID"))
            {
                Response.Cookies.Delete("UserID");
            }

            return Ok("Logged out successfully.");
        }
    }
}
