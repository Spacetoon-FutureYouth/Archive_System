namespace ArchiveSystem.Dtos
{
    public class DepartmentDto
    {
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Department name must be between 3 and 100 characters.")]
        public string DepartmentName { get; set; }
    }
}