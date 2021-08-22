import clsx from "clsx";

const ButtonLink = ({
  children,
  className,
  tag: Tag = "a",
  rounded = true,
  secondary,
  ...passThroughProps
}) => {
  const composedClass = clsx(
    "border-2",
    "hover:border-transparent",
    "bg-transparent",
    "font-semibold",
    "leading-8",
    "py-2",
    "px-6",
    "transition-colors",
    "duration-300",
    "shadow-lg",
    "hover:no-underline",
    { "rounded-full": rounded },
    {
      "hover:bg-blue-500  border-blue-500 hover:text-white": !secondary,
    },
    {
      "hover:bg-gray-200  border-gray-300": secondary,
    },
    className
  );

  return (
    <Tag className={composedClass} {...passThroughProps}>
      {children}
    </Tag>
  );
};

export default ButtonLink;
