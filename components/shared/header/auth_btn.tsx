import { Button } from "@/components/ui";
import { User } from "lucide-react";
import Link from "next/link";

export const HeaderAuthBtn = () => {
  const session = false;
  return session ? (
    <Link href="/profile">
      <Button variant="secondary" className="flex items-center gap-2">
        <User size={18} />
        Профиль
      </Button>
    </Link>
  ) : (
    <Button variant="outline" className="flex items-center gap-2">
      <User size={18} />
      Войти
    </Button>
  );
};
