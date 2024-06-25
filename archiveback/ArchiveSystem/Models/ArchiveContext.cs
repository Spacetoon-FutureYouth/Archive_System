using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Models
{
    public class ArchiveContext : DbContext
    {
        public ArchiveContext(DbContextOptions<ArchiveContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<UserMessage> UserMessages { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<MeetingAttendance> MeetingAttendances { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MeetingAttendance>()
                .HasOne(ma => ma.Meeting)
                .WithMany(m => m.MeetingAttendances)
                .HasForeignKey(ma => ma.MeetingId)
                .OnDelete(DeleteBehavior.Restrict); 

            modelBuilder.Entity<MeetingAttendance>()
                .HasOne(ma => ma.User)
                .WithMany(u => u.MeetingAttendances)
                .HasForeignKey(ma => ma.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MeetingAttendance>()
                .HasKey(A => new { A.UserId, A.MeetingId });

            modelBuilder.Entity<UserMessage>()
                .HasKey(M => new { M.UserId, M.MessageId });

        }
    }
}
