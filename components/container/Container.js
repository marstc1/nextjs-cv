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
      className={`container ${padBottom ? "pb-12" : ""} ${className}`.trim()}
      role={role}
      {...passThroughProps}
    >
      {children}
    </Tag>
  );
};

Container.tags = tags;

export { Container };
