using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ArchiveContext _context;

        public UsersController(ArchiveContext context)
        {
            _context = context;
        }

        [HttpPost("Login")]
        public ActionResult LogIn(LoginUser user)
        {
            var Account = _context.Users.Where(account =>( account.Email == user.Email || account.UserName == user.UserName)&& account.Password == user.Password).FirstOrDefault();
            if (Account == null)
            {
                return BadRequest("No");
            }
            GetUser userAcc = new GetUser()
            {
                UserName = Account.UserName,
                Email = Account.Email,
                PhoneNumber = Account.PhoneNumber,
                UserImage = Account.UserImage
            };
            return Ok(Account);
        }
    }
}
