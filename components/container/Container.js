import { tags } from "./tags";

const Container = ({
  className = "",
  children,
  padBottom = true,
  tag: Tag = tags.div,
  role,
  ...passThroughProps
}) => {
  return (
    <Tag
      className={`${
        padBottom ? "mb-5 pb-5 md:mb-10 md:pb-10" : ""
      } ${className}`.trim()}
      role={role}
      {...passThroughProps}
    >
      {children}
    </Tag>
  );
};

Container.tags = tags;

export { Container };
