import { twMerge as tw } from "tailwind-merge";

const Header = ({ title, className }) => {
  return (
    <header className={tw(`bg-black text-white`, className)}>
      {title ? title : "default title"}
    </header>
  );
};

export default Header;
