import { useEffect, useState } from "react";
import type { ConfigType } from "../mocks/config/types";

const useConfig = () => {
  const [config, setConfig] = useState<null | ConfigType>(null);

  const handleUpdateConfigLocalStorage = (config: ConfigType) => {
    localStorage.setItem("config", JSON.stringify(config));
  };

  const handleSaveConfig = (config: ConfigType) => {
    setConfig(config);
  };
  const handleSaveAllChanges = () => {
    handleUpdateConfigLocalStorage(config);
  };
  useEffect(() => {
    console.log({ config });
  }, [config]);

  /* const handleGetConfigLocalStorage = () => {
    const storedConfig = localStorage.getItem("config");
    if (storedConfig) {
      const userConfig = JSON.parse(storedConfig);
      setConfig(userConfig);
    }
  };
  */
  useEffect(() => {
    //handleGetConfigLocalStorage();
  }, []);

  return { config, handleSaveConfig, handleSaveAllChanges };
};

export default useConfig;
