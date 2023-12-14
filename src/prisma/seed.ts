import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    const usersData = [
      {
        username: "user1",
        email: "user1@example.com",
        password: "password1",
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: "password2",
      },
    ];

    for (const userData of usersData) {
      await prisma.user.create({
        data: userData,
      });
    }

    console.log("Seed completed: Users created successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();
