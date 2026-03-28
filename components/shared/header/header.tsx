import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";
import { Container } from "@/components/ui";
import { HeaderCartSheet, HeaderAuthBtn } from "@/components/shared";

type TProps = {
  className?: ClassNameValue;
};

export const Header = ({ className }: TProps) => {
  const session = false;

  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              className="translate-y-1"
              src="/icon.svg"
              width={55}
              height={55}
              alt="Forno Logo"
            />
            <div>
              <h1 className="text-2xl uppercase font-black text-primary">
                Forno
              </h1>
              <p className="text-sm text-gray-500 leading-3">
                Пиццы из итальянских печей
              </p>
            </div>
          </div>
        </Link>

        <div className={"flex items-center gap-3"}>
          <HeaderAuthBtn />
          <HeaderCartSheet />
        </div>
      </Container>
    </header>
  );
};
