import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartPie,
  faStar,
  faStarHalfAlt,
  faStar as faEmptyStar,
} from "@fortawesome/free-solid-svg-icons";

interface Campaign {
  title: string;
  status: string;
  conversion: string;
}

const campaigns: Campaign[] = [
  { title: "Best Headsets Giveaway", status: "In Queue", conversion: "0%(0)" },
  { title: "iPhone 14 Plus Giveaway", status: "Sent", conversion: "37%(247)" },
  { title: "Macbook Pro M1 Giveaway", status: "Sent", conversion: "18%(6.4k)" },
  { title: "Affiliation Program", status: "Sent", conversion: "12%(2.6k)" },
  { title: "Google AdSense", status: "In Draft", conversion: "0.01%(1)" },
];

const getStatusStars = (status: string) => {
  switch (status) {
    case "In Queue":
      return (
        <>
          <FontAwesomeIcon icon={faStar} className="text-[#FFCE20]" />
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-[#FFCE20]" />
          <FontAwesomeIcon icon={faEmptyStar} className="text-gray-300" />
        </>
      );
    case "Sent":
      return (
        <>
          <FontAwesomeIcon icon={faStar} className="text-[#FFCE20]" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-[#FFCE20]" />
        </>
      );
    case "In Draft":
      return (
        <>
          <FontAwesomeIcon icon={faStar} className="text-[#FFCE20]" />
          <FontAwesomeIcon icon={faEmptyStar} className="text-gray-300" />
          <FontAwesomeIcon icon={faEmptyStar} className="text-gray-300" />
        </>
      );
    default:
      return null;
  }
};

const ReviewTable: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg  font-semibold text-[#2B3674]">
          Social Media Campaigns
        </h2>
        <span className="text-xs font-bold text-[#05CD99]">
          75% activity growth
        </span>
      </div>

      <div className="flex space-x-2 justify-between mb-5">
        <button className="bg-red-500 text-white py-2 px-3  rounded-xl text-xs flex items-center space-x-2 hover:bg-red-600 transition">
          <FontAwesomeIcon icon={faGoogle} />
          <span>Google</span>
        </button>
        <button className="bg-blue-600 text-white py-2 px-3  rounded-xl text-xs flex items-center space-x-2 hover:bg-blue-700 transition">
          <FontAwesomeIcon icon={faFacebook} />
          <span>Facebook</span>
        </button>
        <button className="bg-pink-500 text-white py-2 px-3  rounded-xl text-xs flex items-center space-x-2 hover:bg-pink-600 transition">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-3  rounded-xl text-xs hidden lg:flex items-center space-x-2 hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faChartPie} />
          <span>Seranking</span>
        </button>
      </div>

      <table className="w-full table-auto mt-3">
        <thead>
          <tr className="text-left  text-[#A3AED0] text-sm">
            <th className="py-2 px-4">Campaign</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Conversion</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition md:text-xs lg:text-sm text-sm "
            >
              <td className="p-3">{campaign.title}</td>
              <td className="p-3">
                <span className="flex items-center space-x-1">
                  {getStatusStars(campaign.status)}
                </span>
              </td>
              <td className="p-3 text-[#4318FF] font-bold">
                {campaign.conversion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
