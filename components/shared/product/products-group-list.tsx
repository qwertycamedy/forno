"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import { cn } from "@/utils";
import { Title } from "@/components/ui";
import { ProductCard } from "@/components/shared";
import { TProduct } from "@/types";
import { useCategory } from "@/store";

export const ProductsGroupList = ({
  title,
  products,
  listClassName,
  categoryId,
  className,
}: {
  title: string;
  products: TProduct[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}) => {
  const setActiveId = useCategory((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    },
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={cn(className, "pt-20")} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div
        ref={intersectionRef}
        className={cn("grid grid-cols-3 gap-12.5", listClassName)}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
