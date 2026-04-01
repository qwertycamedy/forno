"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils";
import { TCategory } from "@/types";
import { Categories, HeaderCartSheet, SortPopup } from "@/components/shared";
import { Container } from "@/components/ui";
import { ClassNameValue } from "tailwind-merge";

export const TopBar = ({
  categories,
  className,
}: {
  categories: TCategory[];
  className?: ClassNameValue;
}) => {
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setCartVisible(true);
      } else {
        setCartVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories categories={categories} />
        <div className="flex items-center">
          <SortPopup />
          <HeaderCartSheet
            triggerBtnCl={cn(
              "transition-all",
              !cartVisible
                ? "invisible w-0 p-0 opacity-0"
                : "visible ml-5 opacity-100",
            )}
          />
        </div>
      </Container>
    </div>
  );
};
