namespace ArchiveSystem.Dtos
{
    public class UserDto
    {
        public string Image { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be between 8 and 100 characters.")]
        public string Password { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Confirm Password must be between 8 and 100 characters.")]
        public string ConfirmPassword { get; set; }

        [StringLength(100, MinimumLength = 3, ErrorMessage = "Username must be between 3 and 100 characters.")]
        public string UserName { get; set; }

        public UserGender Gender { get; set; }

        [MaxLength(15)]
        public string PhoneNumber { get; set; }
    }

    public class UserLoginDto
    {

        [MaxLength(256)]
        public string Email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be between 8 and 100 characters.")]
        public string Password { get; set; }

    }
}
