import { wheatherList, dictionaryList } from "../../mocks";
import DashboardItem from "../ui/dashboards/DashboardItem";
import ReactAnimatedWeather from "react-animated-weather";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-wrap">
      {wheatherList.map((item, index) => (
        <DashboardItem
          probability={0.2}
          status={dictionaryList[index][item.icon]}
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
