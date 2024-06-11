import { Logo } from "@/images";
import { ThemeToggle } from "@/components";

export const Header = () => {
  return (
    <header className="dark:border-b-cc-outer-space-light  flex flex-wrap items-center justify-between px-4 sm:px-5 md:px-[72px] py-4 border-b-[1px]">
      <Logo className="text-cc-eerie-black dark:text-cc-ghost-white" />
      <ThemeToggle />
    </header>
  );
};
