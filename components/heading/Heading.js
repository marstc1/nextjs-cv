import { tags } from "./tags";

const Heading = ({
  className = "",
  children,
  tag: Tag,
  isBold = true,
  isRightAligned = false,
  isUppercase = true,
  ...passThroughProps
}) => {
  const composedClassName = `mb-6 ${Tag === tags.h2 ? "rounded-r-full" : ""} 
  ${
    Tag === tags.h2 && isRightAligned
      ? "lg:rounded-r-none lg:rounded-l-full lg:pl-8"
      : ""
  } 
  ${isBold ? "font-bold" : ""} ${className}`.trim();

  return (
    <Tag className={composedClassName} {...passThroughProps}>
      {isUppercase ? children.toUpperCase() : children}
    </Tag>
  );
};

Heading.tags = tags;

export { Heading };
