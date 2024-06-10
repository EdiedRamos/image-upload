import { Logo } from "@/images";
import { ThemeToggle } from "@/components";

export const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-[72px] py-4 border-b-2">
      <Logo />
      <ThemeToggle />
    </header>
  );
};
