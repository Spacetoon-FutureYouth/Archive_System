using Microsoft.EntityFrameworkCore;

namespace ArchiveSystem.Models
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
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

            // MeetingAttendance Configuration
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

            modelBuilder.Entity<MeetingAttendance>().HasKey(ma => new { ma.UserId, ma.MeetingId });

            modelBuilder.Entity<UserRole>().HasKey(ur => new { ur.UserId, ur.DepartmentId });

            modelBuilder.Entity<UserMessage>().HasKey(um => new { um.UserId, um.MessageId });

            modelBuilder.Entity<UserMessage>()
                .HasOne(um => um.User)
                .WithMany(u => u.UserMessages)
                .HasForeignKey(um => um.UserId)
                .OnDelete(DeleteBehavior.Restrict); // Restrict User cascade

            modelBuilder.Entity<UserMessage>()
                .HasOne(um => um.Message)
                .WithMany(m => m.UserMessages)
                .HasForeignKey(um => um.MessageId)
                .OnDelete(DeleteBehavior.Cascade); // Cascade on Message side
        }
    }
}
