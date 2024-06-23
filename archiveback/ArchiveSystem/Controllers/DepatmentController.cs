using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepatmentController : ControllerBase
    {
        private readonly ArchiveContext _context;

        public DepatmentController(ArchiveContext context)
        {
            _context = context;
        }
    }
}
