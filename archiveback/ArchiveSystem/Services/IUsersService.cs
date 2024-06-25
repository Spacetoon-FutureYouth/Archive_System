namespace ArchiveSystem.Services
{
    public interface IUsersService
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(Guid id);
        Task<User> Add(User user);
        Task<User> Update(User user);
        Task<User> Delete(User user);
    }
}
