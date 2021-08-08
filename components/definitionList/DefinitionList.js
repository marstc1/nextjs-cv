const DefinitionList = ({ className = "", definitionTerm, id, listItems }) => {
  return (
    <dl className={`${className}`}>
      <dt id={id} className="">
        {definitionTerm}:
      </dt>
      {listItems.map((item) => (
        <dd
          role="definition"
          aria-labelledby={id}
          className="ml-7 pb-2 list-item list-disc"
          key={item}
        >
          {item}
        </dd>
      ))}
    </dl>
  );
};

export default DefinitionList;
