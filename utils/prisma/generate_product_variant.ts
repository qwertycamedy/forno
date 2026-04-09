import { Prisma } from "@/app/generated/prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

export const generateProductVariant = ({
  productId,
  type,
  size,
}: {
  productId: number;
  type?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    type,
    size,
  } as Prisma.ProductVariantUncheckedCreateInput;
};
