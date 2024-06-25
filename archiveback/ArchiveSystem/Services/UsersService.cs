
using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Services
{
    public class UsersService : IUsersService
    {
        private readonly ApplicationDBContext _context;

        public UsersService(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<User> Add(User user)
        {
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public Task<User> Delete(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users.OrderBy(u => u.Username).ToListAsync();
        }

        public async Task<User> GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<User> Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
