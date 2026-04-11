import { Product } from "@/app/generated/prisma/client";
import { apiConstants, instance } from "@/services";

export const search = async ({ value }: { value: string }) => {
  const { data } = await instance.get<Product[]>(apiConstants.SEARCH_PRODUCTS, {
    params: { value },
  });

  return data;
};
