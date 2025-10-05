import { wheatherList } from "../../mocks";
import ConfigCard from "../ui/cards/ConfigCard";
import ReactAnimatedWeather from "react-animated-weather";

const Config = () => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center">
      {wheatherList.map((item, index) => (
        <ConfigCard
          name={item.name}
          ico={
            <ReactAnimatedWeather
              icon={item.icon}
              color={item.color}
              size={40}
              animate={item.animate}
            />
          }
        />
      ))}
    </div>
  );
};

export default Config;
