import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: IconDefinition;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
}) => {
  return (
    <div className="shadow-md flex flex-col items-center rounded-xl border border-stroke bg-white p-4 shadow-default  md:p-6 xl:p-7.5">
      <div className="mb-3">
        <FontAwesomeIcon
          icon={icon}
          className="text-2xl p-3 w-5 h-5 bg-[#F4F7FE] rounded-[50px]  text-[#4318FF]"
        />
      </div>
      <div className="text-sm text-[#A3AED0]">{title}</div>
      <div className="text-2xl font-semibold text-[#2B3674]">{value}</div>
      <div
        className={`text-sm ${
          changeType === "increase" ? "text-[#05CD99]" : "text-[#EE5D50]"
        }`}
      >
        {changeType === "increase" ? "▲" : "▼"} {change}
      </div>
    </div>
  );
};

export default Card;
