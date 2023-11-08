import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1; // this will set state to -1 and close all open panels
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        {/* click the label div and set this itemed index to the expandedIndex in our State */}
        <div
          onClick={handleClick(index)}
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {/* conditional rendering — if content isExpanded, render it. else render nothing */}
        {/* returns first falsey or last truthy */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
