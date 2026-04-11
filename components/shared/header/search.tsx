"use client";

import { Product } from "@/app/generated/prisma/client";
import { Api } from "@/services";
import { cn } from "@/utils";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

export const HeaderSearch = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  const clearState = () => {
    setProducts([]);
    setValue("");
    setFocused(false);
  };

  useClickAway(ref, () => {
    clearState();
  });

  useDebounce(
    async () => {
      if (value.length) {
        try {
          const products = await Api.products.search({ value });
          setProducts(products);
        } catch (e) {
          console.error("GET SEARCH PRODUCTS ERROR: ", e);
        }
      } else {
        setProducts([]);
      }
    },
    400,
    [value],
  );

  const onClickItem = () => {
    clearState();
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11",
          focused && "z-30",
        )}
      >
        <SearchIcon className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />

        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12",
            )}
          >
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div
                  onClick={onClickItem}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
                >
                  <img
                    className="w-6 h-6 min-w-6 object-contain"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  {product.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
