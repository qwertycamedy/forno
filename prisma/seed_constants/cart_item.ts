export const cartItems = [
  {
    cartId: 1,
    productVariantId: 1,
    quantity: 1,
    ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  },
  {
    cartId: 1,
    productVariantId: 2,
    quantity: 4,
    ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  },
];
