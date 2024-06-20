using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly ArchiveContext _context;

        public MessageController(ArchiveContext context)
        {
            _context = context;
        }
    }
}
