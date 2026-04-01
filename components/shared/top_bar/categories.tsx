"use client";

import { useCategory } from "@/store";
import { TCategory } from "@/types";
import { cn } from "@/utils";
import { ClassNameValue } from "tailwind-merge";

export const Categories = ({
  categories,
  className,
}: {
  categories: TCategory[];
  className?: ClassNameValue;
}) => {
  const activeId = useCategory((state) => state.activeId);
  
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category) => (
        <a
          key={category.id}
          className={cn("flex items-center font-bold h-11 rounded-2xl px-5", {
            "bg-white shadow-md shadow-gray-200 text-primary":
              activeId === category.id,
          })}
          href={`/#${category.name}`}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};
