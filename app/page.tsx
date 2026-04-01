import { TCategory, TProduct } from "@/types";
import { Filters, ProductsGroupList, TopBar } from "@/components/shared";
import { Container, Title } from "@/components/ui";

export default function Home() {
  const categories: TCategory[] = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Бургеры" },
    { id: 3, name: "Напитки" },
    { id: 4, name: "Десерты" },
    { id: 5, name: "Детям" },
    { id: 6, name: "Снэки" },
    { id: 7, name: "Другое" },
  ];
  const products: TProduct[] = [
    {
      id: 0,
      price: 500,
      name: "Сырный цыпленок",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/01995c4fb83e704284f5dcbbf3890686.avif",
    }, {
      id: 1,
      price: 500,
      name: "Сырный цыпленок",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/01995c4fb83e704284f5dcbbf3890686.avif",
    }, {
      id: 2,
      price: 500,
      name: "Сырный цыпленок",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/01995c4fb83e704284f5dcbbf3890686.avif",
    }, {
      id: 3,
      price: 500,
      name: "Сырный цыпленок",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/01995c4fb83e704284f5dcbbf3890686.avif",
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      <Container className={"mt-5"}>
        <Title size="xl" text="Все пиццы" className="font-medium" />
      </Container>
      <TopBar categories={categories} />

      <Container className="pb-14 mt-10 flex gap-15">
        <div className="w-62.5">
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            {categories.map((category) => (
              <ProductsGroupList
                key={category.id}
                title={category.name}
                products={products}
                categoryId={category.id}
              />
            ))}
          </div>
          <div className="flex items-center gap-6 mt-12">Пагинация</div>
        </div>
      </Container>
    </div>
  );
}
