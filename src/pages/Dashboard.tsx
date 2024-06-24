import {
  faChartBar,
  faUsers,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Card from "@/components/Card";
import { TopChannelsTable } from "@/components/TopChannelsTable";
import BarChart from "@/components/BarChart";
import ExternalLinks from "@/components/ExternalLinks";
import LineChart from "@/components/LineChart";
import Feedback from "@/components/Feedback";
import ReviewTable from "@/components/ReviewTable";
import { CustomSeparator } from "@/components/CustomSeparator";

const Dashboard: React.FC = () => {
  return (
    <div className="pt-12  px-auto">
      <div className="mb-3 pb-5 pt-4 flex items-center gap-3">
        <h1 className="text-lg font-semibold md:text-2xl  text-[#2B3674]">
          Dashboard
        </h1>
        <CustomSeparator />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
        <Card
          title="Avg. Client Rating"
          value="7.8/10"
          change="+2.5% than last Week"
          changeType="increase"
          icon={faChartBar}
        />
        <Card
          title="Instagram Followers"
          value="7.1/10"
          change="-1.5% than last Week"
          changeType="decrease"
          icon={faUsers}
        />
        <Card
          title="Avg. Client Rating"
          value="$5.03"
          change="+2.6% than last Week"
          changeType="increase"
          icon={faDollarSign}
        />
      </div>

      <div className="mt-10  gap-6 flex flex-col md:flex-row ">
        <div className="w-full md:col-span-2">
          <TopChannelsTable />
        </div>
        <div className="w-full md:max-w-[40%]">
          <BarChart />
        </div>
      </div>

      <div className="mt-10  gap-6 flex flex-col md:flex-row mx-auto px-auto">
        <div className="w-full md:max-w-[50%]">
          {" "}
          <LineChart />
        </div>
        <div className="w-full ">
          <ReviewTable />
        </div>
      </div>

      <div className="mt-10  gap-6 flex flex-col md:flex-row mx-auto px-auto ">
        <div className="w-full md:max-w-[40%]">
          <ExternalLinks />
        </div>
        <div className="w-full ">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
