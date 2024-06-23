using System;

public class AttachmentTypeValidation : ValidationAttribute
{
    private readonly string[] _allowedTypes = { "image", "document" };

    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value != null && Array.Exists(_allowedTypes, type => type.Equals(value.ToString(), StringComparison.OrdinalIgnoreCase)))
        {
            return ValidationResult.Success;
        }
        return new ValidationResult($"Attachment type must be one of the following: {string.Join(", ", _allowedTypes)}.");
    }
}
