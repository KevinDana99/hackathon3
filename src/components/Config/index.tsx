import { useContext } from "react";
import { wheatherList } from "../../mocks";
import type { ConfigType } from "../../mocks/config/types";
import ConfigCard from "../ui/cards/ConfigCard";
import ReactAnimatedWeather from "react-animated-weather";
import {
  SearchQueryContext,
  type SearchContextType,
} from "../../contexts/SearchContext";

const Config = () => {
  const context: SearchContextType = useContext(SearchQueryContext);
  const { config, handleSaveConfig } = context;

  const handleUpdatedConfig = (newItem: ConfigType[0]) => {
    const exists = config?.some((item) => item.widget_id === newItem.widget_id);

    if (!exists) {
      if (config) {
        const newConfig = [...config, newItem];
        handleSaveConfig(newConfig);
      } else {
        const newConfig = [newItem];
        handleSaveConfig(newConfig);
      }
    } else {
      const itemRepeat = newItem.widget_id;
      const filterConfig = config?.filter(
        (item) => item.widget_id !== itemRepeat
      );
      handleSaveConfig([...filterConfig, newItem]);
    }
  };

  return (
    <div className="w-full h-auto flex flex-wrap justify-center">
      {wheatherList.map((item, index) => {
        return (
          <ConfigCard
            handleUpdatedConfig={handleUpdatedConfig}
            id={item.id}
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
        );
      })}
    </div>
  );
};

export default Config;
