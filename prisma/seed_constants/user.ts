import { UserRole } from "@/app/generated/prisma/enums";
import { hashSync } from "bcrypt";

export const users = [
  {
    fullName: "User",
    email: "user@test.ru",
    password: hashSync("111111", 10),
    verified: new Date(),
    role: UserRole.USER,
  },
  {
    fullName: "Admin",
    email: "admin@test.ru",
    password: hashSync("111111", 10),
    verified: new Date(),
    role: UserRole.ADMIN,
  },
];
