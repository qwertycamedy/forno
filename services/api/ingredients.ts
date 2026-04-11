import { Ingredient } from "@/app/generated/prisma/client";
import { apiConstants, instance } from "@/services";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await instance.get<Ingredient[]>(apiConstants.INGREDIENTS);

  return data;
};
