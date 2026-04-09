import { ingredients } from "./ingredient";

export const pizza1 = {
  name: "Пепперони фреш",
  imageUrl:
    "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
  categoryId: 1,
  ingredients: {
    connect: ingredients.slice(0, 5),
  },
};

export const pizza2 = {
  name: "Сырная",
  imageUrl:
    "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
  categoryId: 1,
  ingredients: {
    connect: ingredients.slice(5, 10),
  },
};

export const pizza3 = {
  name: "Чоризо фреш",
  imageUrl:
    "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
  categoryId: 1,
  ingredients: {
    connect: ingredients.slice(10, 40),
  },
};
