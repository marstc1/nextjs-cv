import { Star } from "styled-icons/evaicons-solid";
import UnorderedList from "../unorderedList/UnorderedList";

const IconList = ({ className = "", listData }) => {
  return (
    <UnorderedList className={`grid grid-cols-1 gap-y-9 ${className}`.trim()}>
      {listData.map((item) => (
        <li
          className={
            className.includes("grid-cols-2") &&
            (listData.length - 1) % 2 === 0 &&
            item === listData[listData.length - 1]
              ? "md:col-span-2"
              : undefined
          }
          key={item.id || item.name}
        >
          {item.icon ? (
            item.icon
          ) : (
            <Star className="inline h-7 w-7 mr-3 text-blue-500" />
          )}
          {item.name}
        </li>
      ))}
    </UnorderedList>
  );
};

export default IconList;
