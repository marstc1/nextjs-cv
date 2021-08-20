import { CircleFill } from "styled-icons/bootstrap";
import UnorderedList from "../unorderedList/UnorderedList";

const TimelineList = ({ listData }) => {
  return (
    <UnorderedList className="pl-4 md:pl-0">
      {listData.map((item) => (
        <li
          key={item.rightHeading}
          className={`relative pl-8 md:ml-32 lg:ml-52 ${
            item !== listData[listData.length - 1]
              ? "border-l border-solid border-gray-200 pb-14"
              : ""
          }`}
        >
          <CircleFill className="absolute -left-2.5 h-5 w-5 text-blue-500 border-4 rounded-full border-white transition-all duration-500 timeline-circle" />
          <div className="font-bold">{item.rightHeading}</div>
          <div className="text-sm">
            {item.subHeading} {item.notes}
          </div>
          <div className="flex gap-x-0.5 md:inline-block md:text-right md:absolute md:top-0 pr-5 md:w-24 md:-left-24 lg:w-44 lg:-left-44">
            <span className="text-sm font-bold">{item.leftHeading}</span>
          </div>
          <div className="text-sm leading-7">{item.details}</div>
        </li>
      ))}
    </UnorderedList>
  );
};

export default TimelineList;
