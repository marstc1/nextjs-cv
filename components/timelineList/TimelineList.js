import { Star } from "styled-icons/evaicons-solid";
import UnorderedList from "../unorderedList/UnorderedList";

const TimelineList = ({ listData }) => {
  return (
    <UnorderedList className="pl-4 md:pl-0">
      {listData.map((item) => (
        <li
          key={item.rightHeading}
          className={`relative pl-8 pb-4 md:ml-32 lg:ml-52 ${
            item !== listData[listData.length - 1]
              ? "border-l border-solid border-gray-200"
              : ""
          }`}
        >
          <Star className="absolute -left-2 h-5 w-4 border-8 border-blue-500 rounded-full" />
          <div className="font-bold">{item.rightHeading}</div>
          <div className="text-sm">
            {item.subHeading} {item.notes}
          </div>
          <div className="flex gap-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-4 md:w-24 md:-left-24 lg:w-44 lg:-left-44">
            <span className="text-sm font-bold">{item.leftHeading}</span>
          </div>
          <div className="text-sm leading-7">{item.details}</div>
        </li>
      ))}
    </UnorderedList>
  );
};

export default TimelineList;
