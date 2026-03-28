import { cn } from "@/utils";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

type TProps = {
  className?: ClassNameValue;
  children: ReactNode;
};

export const Container = ({ className, children }: TProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl w-full px-5", className)}>{children}</div>
  );
};
