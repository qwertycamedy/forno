import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import {
  categories,
  ingredients,
  pizza1,
  pizza2,
  pizza3,
  products,
  users,
} from "./seed_constants";
import { generateProductVariant } from "@/utils";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function up() {
  await prisma.user.createMany({
    data: users,
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });
  const pizza_1 = await prisma.product.create({
    data: pizza1,
  });
  const pizza_2 = await prisma.product.create({
    data: pizza2,
  });

  const pizza_3 = await prisma.product.create({
    data: pizza3,
  });

  await prisma.productVariant.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductVariant({ productId: pizza_1.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza_1.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza_1.id, type: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductVariant({ productId: pizza_2.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza_2.id, type: 1, size: 30 }),
      generateProductVariant({ productId: pizza_2.id, type: 1, size: 40 }),
      generateProductVariant({ productId: pizza_2.id, type: 2, size: 20 }),
      generateProductVariant({ productId: pizza_2.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza_2.id, type: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductVariant({ productId: pizza_3.id, type: 1, size: 20 }),
      generateProductVariant({ productId: pizza_3.id, type: 2, size: 30 }),
      generateProductVariant({ productId: pizza_3.id, type: 2, size: 40 }),

      // Остальные продукты
      generateProductVariant({ productId: 1 }),
      generateProductVariant({ productId: 2 }),
      generateProductVariant({ productId: 3 }),
      generateProductVariant({ productId: 4 }),
      generateProductVariant({ productId: 5 }),
      generateProductVariant({ productId: 6 }),
      generateProductVariant({ productId: 7 }),
      generateProductVariant({ productId: 8 }),
      generateProductVariant({ productId: 9 }),
      generateProductVariant({ productId: 10 }),
      generateProductVariant({ productId: 11 }),
      generateProductVariant({ productId: 12 }),
      generateProductVariant({ productId: 13 }),
      generateProductVariant({ productId: 14 }),
      generateProductVariant({ productId: 15 }),
      generateProductVariant({ productId: 16 }),
      generateProductVariant({ productId: 17 }),
    ],
  });
}

export async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error("PRISMA SEED ERROR: ", e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("PRISMA SEED ERROR: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
