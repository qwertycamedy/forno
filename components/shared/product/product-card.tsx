import { cn } from "@/utils";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui";
import { Title } from "@/components/ui";

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: {
  id: number;
  name: string;
  price: number;
  imageUrl?: string | null;
  className?: string;
}) => {
  return (
    <Link className="flex flex-col flex-1" href={`/product/${id}`}>
      <div className={cn("flex flex-col flex-1", className)}>
        <div className="flex-1">
          <div className="flex justify-center p-6 bg-secondary rounded-lg h-65">
            <img className="w-53.75 h-53.75" src={imageUrl || ""} alt="Logo" />
          </div>

          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

          <p className="text-sm text-gray-400">
            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты,
            соус альфредо, чеснок
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus className="w-5 h-5 mr-1" />
            Добавить
          </Button>
        </div>
      </div>
    </Link>
  );
};
