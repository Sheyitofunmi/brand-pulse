import { NavLink } from "react-router-dom";
import { LineChart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faChartBar,
  faComment,
  faFileSignature,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden h-full  lg:block lg:fixed lg:w-[220px] bg-[#fff] border-r ">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <img src="/logo-blue.svg" alt="" />
            <span className="text-[#2B3674] italic">BrandPluse</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm gap-2 mt-3 font-medium lg:pl-4 lg:pr-0 top-0 left-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 navv py-2 transition-all ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="h-4 w-4"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Dashboard
                </>
              )}
            </NavLink>
            <NavLink
              to="/mentions"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 navv py-2 transition-all ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="h-4 w-4"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Mentions
                </>
              )}
            </NavLink>
            <NavLink
              to="/top-sources"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="h-4 w-4"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Top Sources
                </>
              )}
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="h-4 w-4"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Reports
                </>
              )}
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <LineChart
                    className="h-4 w-4"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Analytics
                </>
              )}
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto px-4 pb-4">
          <div className="mb-4">
            {" "}
            <img src="/DancingDoodle.svg" alt="" />{" "}
          </div>
          <Card x-chunk="dashboard-02-chunk-0 rounded-[20px] bg-[#F4F7FE]">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle className="text-lg text-white">
                Unlock Premium Features
              </CardTitle>
              <div className="flex justify-between items-center">
                <CardDescription className="text-xs text-[#E9EDF7]">
                  Go Pro
                </CardDescription>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="h-4 w-4 text-[#E9EDF7]"
                />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
