import { twMerge as tw } from "tailwind-merge";

const PrimaryButton = ({ children, className, props }) => {
  return (
    <button
      className={tw(
        `bg-sky-400 px-8 py-3 rounded-xl text-2xl disabled:bg-red-700`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
