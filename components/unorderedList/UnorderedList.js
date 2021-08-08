const UnorderedList = ({ children, className = "", topMargin = true }) => {
  return (
    <ul
      className={` ${topMargin ? "mt-2" : ""} ${className}`.trim()}
      role="list"
    >
      {children}
    </ul>
  );
};

export default UnorderedList;
