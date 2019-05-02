using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="You need specify the password between 8 and 4 character")]
        public string Password { get; set; }
    }
}