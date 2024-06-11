import { Logo } from "@/images";
import { ThemeToggle } from "@/components";

export const Header = () => {
  return (
    <header className="bg-cc-ghost-white dark:bg-cc-midnight-blue  flex flex-wrap items-center justify-between px-[72px] py-4 border-b-[1px]">
      <Logo className="text-cc-eerie-black dark:text-cc-ghost-white" />
      <ThemeToggle />
    </header>
  );
};
