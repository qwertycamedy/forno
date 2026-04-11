import { Ingredient } from "@/app/generated/prisma/client";
import { Api } from "@/services";
import { useEffect, useState } from "react";

export const useFilterIngredients = (): Ingredient[] => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (e) {
        console.error("GET ALL INGREDIENS ERROR: ", e);
      }
    })();
  }, []);

  return ingredients;
};
