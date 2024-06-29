using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public MessageController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet("GetExportMessage")]
        public async Task<IActionResult> GetExportMesg(Guid userId)
        {
            var messages = await _context.Messages
                .Where(mesg => mesg.UserId == userId)
                .Include(mesg => mesg.UserMessages)
                .ThenInclude(um => um.User)
                .ToListAsync();

            var messageDtos = messages
                .SelectMany(mesg => mesg.UserMessages)
                .Select(um => new MessageDto
                {
                    SenderName = um.Message.User.Username,
                    SenderEmail = um.Message.User.Email,
                    DateOfSend = um.Message.DateOfSend,
                    MessageType = um.Message.MessageType,
                    Seen = um.State == MessageState.Seen,
                    DateOfSeen = um.DateOfSeen
                })
                .Distinct()
                .ToList();

            return Ok(messageDtos);
        }

        [HttpGet("GetImportMessage")]
        public async Task<IActionResult> GetImportMesg(Guid userId)
        {
            var receivedMessages = await _context.UserMessages
                .Where(um => um.UserId == userId)
                .Include(um => um.Message)
                .ThenInclude(m => m.User)
                .Select(um => new
                {
                    SenderName = um.Message.User.Username,
                    SenderEmail = um.Message.User.Email,
                    DateOfSend = um.Message.DateOfSend,
                    MessageType = um.Message.MessageType
                })
                .ToListAsync();

            return Ok(receivedMessages);
        }

        [HttpGet("GetDeletedUserMessages")]
        public async Task<IActionResult> GetDelUserMesg(Guid adminId, Guid userId)
        {
            // Check if the user is an admin
            var admin = await _context.Users
                .Where(u => u.UserId == adminId && u.UserAutho == UserAutho.Admin)
                .FirstOrDefaultAsync();

            if (admin == null)
            {
                return Unauthorized("Access denied. User is not an admin.");
            }

            // Retrieve deleted messages for the specific user
            var deletedUserMessages = await _context.UserMessages
                .Where(um => um.UserId == userId && um.Message.User.UserState == UserState.Deleted) // Filter based on UserState.Deleted
                .Include(um => um.Message)
                .ThenInclude(m => m.User) // Include sender details if needed
                .Select(um => new
                {
                    MessageId = um.MessageId,
                    SenderName = um.Message.User.Username,
                    SenderEmail = um.Message.User.Email,
                    DateOfSend = um.Message.DateOfSend,
                    MessageType = um.Message.MessageType,
                    Seen = um.State == MessageState.Seen, // Adjust as per your logic for UserMessage state
                    DateOfSeen = um.DateOfSeen // Adjust as per your logic for UserMessage state
                                               // Add more properties as needed
                })
                .ToListAsync();

            return Ok(deletedUserMessages);
        }

        [HttpPost("SendMessage")]
        public async Task<IActionResult> SendMesg(Guid userId, [FromBody] SendMessageDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model state."); // Handle invalid model state
            }

            try
            {
                // Fetch recipient user IDs based on email addresses
                var recipientIds = await GetRecipientIdsByEmails(model.RecipientEmails);

                // Create a new message
                var newMessage = new Message
                {
                    UserId = userId, // Assuming you get the sender's UserId from the model (Guid)
                    MessageType = model.MessageType, // Assuming MessageType is part of the model
                    DateOfSend = DateTime.UtcNow // Use UTC time for consistency
                    // Add other properties as needed
                };

                _context.Messages.Add(newMessage);
                await _context.SaveChangesAsync();

                // Create UserMessage entries for each recipient
                foreach (var recipientId in recipientIds)
                {
                    var userMessage = new UserMessage
                    {
                        UserId = recipientId,
                        MessageId = newMessage.MessageId,
                        State = MessageState.Non, // Initial state as "Non"
                        DateOfSeen = null // Initial date of seen is null
                    };

                    _context.UserMessages.Add(userMessage);
                }

                await _context.SaveChangesAsync();

                return Ok("Message sent successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        private async Task<List<int>> GetRecipientIdsByEmails(List<string> recipientEmails)
        {
            var recipientIds = new List<Guid>();

            foreach (var email in recipientEmails)
            {
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == email);


            }

            return recipientIds;
        }

        [HttpGet("ShowSentMessage")]
        public async Task<IActionResult> ShowSentMesg(Guid userId, int messageId)
            {
                var message = await _context.Messages
                    .Where(m => m.UserId == userId && m.MessageId == messageId)
                    .Include(m => m.User)
                    .Select(m => new
                    {
                        MessageId = m.MessageId,
                        SenderName = m.User.Username,
                        SenderEmail = m.User.Email,
                        DateOfSend = m.DateOfSend,
                        MessageType = m.MessageType
                    })
                    .FirstOrDefaultAsync();

                if (message == null)
                {
                    return NotFound("Message not found for this user.");
                }

                return Ok(message);
        }

        [HttpGet("ShowReceivedMessage")]
        public async Task<IActionResult> ShowRecMesg(Guid userId, int messageId)
        {
            var userMessage = await _context.UserMessages
                .Where(um => um.UserId == userId && um.MessageId == messageId)
                .Include(um => um.Message)
                .FirstOrDefaultAsync();

            if (userMessage == null)
            {
                return NotFound("Message not found for this user.");
            }

            // Update the UserMessage state to "Seen" and set DateOfSeen to current date
            userMessage.State = MessageState.Seen;
            userMessage.DateOfSeen = DateTime.UtcNow;

            // Save changes to the database
            await _context.SaveChangesAsync();

            // Prepare response object
            var message = new
            {
                MessageId = userMessage.MessageId,
                SenderName = userMessage.Message.User.Username,
                SenderEmail = userMessage.Message.User.Email,
                DateOfSend = userMessage.Message.DateOfSend,
                MessageType = userMessage.Message.MessageType
            };

            return Ok(message);
        }
    }
}
