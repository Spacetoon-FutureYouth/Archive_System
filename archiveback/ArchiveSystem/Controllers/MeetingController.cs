using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
