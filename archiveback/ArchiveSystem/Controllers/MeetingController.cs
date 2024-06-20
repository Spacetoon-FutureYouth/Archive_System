using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly ArchiveContext _context;

        public MeetingController(ArchiveContext context)
        {
            _context = context;
        }
    }
}
