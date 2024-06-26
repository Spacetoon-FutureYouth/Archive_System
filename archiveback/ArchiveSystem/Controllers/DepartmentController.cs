using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public DepartmentController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDepartments()
        {
            var departments = await _context.Departments.AsNoTracking().OrderBy(u => u.DepartmentName).ToListAsync();
            return Ok(departments);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDepartmentByID(int id)
        {
            if (id == 0) return BadRequest("NULL");

            var department = await _context.Departments.AsNoTracking().SingleOrDefaultAsync(u => u.DepartmentId == id);
            if (department == null)
                return BadRequest($"no department with ID {id}");
            
            return Ok(department);  
        }

        [HttpPost]
        public async Task<IActionResult> AddDepartment([FromForm] DepartmentDto dto)
        {
            if (dto == null) return BadRequest("NULL");

            var department = new Department
            {
                DepartmentName = dto.DepartmentName,
            };

            await _context.AddAsync(department);
            await _context.SaveChangesAsync();

            return Ok(department);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDepartment(int id, [FromForm] DepartmentDto dto)
        {
            var department = await _context.Departments.FindAsync(id);

            if (department == null)
                return NotFound($"No user with ID:{id}");
            
            department.DepartmentName = dto.DepartmentName ?? department.DepartmentName;
            
            await _context.SaveChangesAsync();
            return Ok(department);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var department = await _context.Departments.FindAsync(id);

            if (department == null)
                return NotFound($"No user with ID:{id}");

            _context.Departments.Remove(department);
            await _context.SaveChangesAsync();

            return Ok(department);
        }
    }
}
