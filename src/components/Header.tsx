import React from "react";
import { NavLink } from "react-router-dom";
import { CircleUser, LineChart, Menu, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faChartBar,
  faComment,
  faFileSignature,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { DatePickerPresent } from "./DatePickerWithPresets";

const Header: React.FC = () => {
  return (
    <header className="flex fixed bg-[#fff] w-full lg:w-[calc(100%-220px)] z-[10]  h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-white">
          <nav className="grid  text-lg font-medium gap-6">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <img src="/logo-blue.svg" alt="" />
              <span className=" text-[#2B3674] italic">BrandPulse</span>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `mx-[-0.65rem] flex items-center gap-4  px-3 py-2 text-muted-foreground hover:text-foreground ${
                  isActive ? "activeClass" : "text-[#A3AED0]"
                } hover:`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="h-5 w-5"
                    style={{ color: isActive ? "#4318FF" : "#A3AED0" }}
                  />
                  Dashboard
                </>
              )}
            </NavLink>

            <NavLink
              to="/mentions"
              className={({ isActive }) =>
                `mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground ${
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
                `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
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
                `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
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
                `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
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

          <div className="mt-auto">
            <div className="mb-6">
              {" "}
              <img src="/DancingDoodle.svg" alt="" />{" "}
            </div>
            <Card className="p-5">
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
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-4 top-2.5 h-4 w-4 text-[#2B3674]" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-[#F4F7FE] rounded-[20px] pl-10 text-[#8F9BBA] shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <DatePickerPresent />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full text-[#8F9BBA]"
          >
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
