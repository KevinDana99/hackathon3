import { useState } from "react";
import { wheatherList, dictionaryList } from "../../mocks";
import DashboardItem from "../ui/dashboards/DashboardItem";
import ReactAnimatedWeather from "react-animated-weather";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center">
      {wheatherList.map((item, index) => (
        <DashboardItem
          name={item.name}
          ico={
            <ReactAnimatedWeather
              icon={item.icon}
              color={item.color}
              size={item.size}
              animate={item.animate}
            />
          }
        />
      ))}
    </div>
  );
};

export default Dashboard;
