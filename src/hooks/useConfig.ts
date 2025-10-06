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
  const handleGetConfigLocalStorage = () => {
    const localStorageConfig = localStorage.getItem("config");
    if (localStorageConfig) {
      const getConfig =
        localStorage.getItem("config") &&
        JSON.parse(localStorage?.getItem("config") ?? "");
      setConfig(getConfig);
    }
  };
  const handleSaveAllChanges = () => {
    handleUpdateConfigLocalStorage(config);
  };

  useEffect(() => {
    handleGetConfigLocalStorage();
  }, []);

  useEffect(() => {
    console.log({ config });
  }, [config]);

  return { config, handleSaveConfig, handleSaveAllChanges };
};

export default useConfig;
