import clsx from "clsx";
import { tags } from "./tags";

const Heading = ({
  className = "",
  children,
  tag: Tag,
  isBold = true,
  isRightAligned = false,
  ...passThroughProps
}) => {
  const composedClassName = clsx(
    "mb-6",
    { "font-bold": isBold },
    { "bg-gray-100": Tag === tags.h2 },
    { "rounded-r-full": Tag === tags.h2 },
    { "text-2xl py-3": Tag === tags.h2 },
    {
      "lg:rounded-r-none lg:rounded-l-full lg:pl-8":
        Tag === tags.h2 && isRightAligned,
    },
    className
  );

  return (
    <Tag className={composedClassName} {...passThroughProps}>
      {children}
    </Tag>
  );
};

Heading.tags = tags;

export { Heading };
