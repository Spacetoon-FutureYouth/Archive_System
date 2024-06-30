﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ArchiveSystem.Migrations
{
    public partial class removeAttribFromMeetingAttendance : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InvitationSent",
                table: "MeetingAttendances");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "InvitationSent",
                table: "MeetingAttendances",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
