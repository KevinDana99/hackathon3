import { createContext, useEffect, useState, type ReactNode } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";
import useConfig from "../../hooks/useConfig";
import type { ConfigType } from "../../mocks/config/types";

export type SearchContextType = {
  location: string | null;
  startDate: string | null;
  endDate: string | null;
  country: {
    name: string;
    coords: {
      lat: number;
      lon: number;
    } | null;
  };
  config: ConfigType;
  handleChangeStartDate: (date: string) => void;
  handleChangeEndDate: (date: string) => void;
  handleChangeLocation: (
    location: { name: string; coords: string[] } | null
  ) => void;
  handleSaveAllChanges: () => void;
  handleSaveConfig: (config: ConfigType) => void;
};
export const SearchQueryContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchQueryProvider = ({ children }: { children: ReactNode }) => {
  const { config, handleSaveAllChanges, handleSaveConfig } = useConfig();
  const { coords, error, loading } = useGeolocation();
  console.log({ coords });

  const [location, setLocation] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [country, setCountry] = useState<{
    name: string;
    coords: {
      lat: number;
      lon: number;
    } | null;
  } | null>(null);
  const handleChangeLocation = (location: string) => setLocation(location);
  const handleChangeStartDate = (date: string) => setStartDate(date);
  const handleChangeEndDate = (date: string) => setEndDate(date);
  const handleGetCountry = async () => {
    const req = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords?.lat}&lon=${coords?.lon}&format=json`
    );
    const res = await req.json();
    setCountry({ name: res.address.country, coords });
  };
  useEffect(() => {
    coords && handleGetCountry();
  }, [coords]);

  return (
    <SearchQueryContext.Provider
      value={{
        location,
        startDate,
        endDate,
        config,
        country,
        handleSaveAllChanges,
        handleSaveConfig,
        handleChangeLocation,
        handleChangeStartDate,
        handleChangeEndDate,
      }}
    >
      {children}
    </SearchQueryContext.Provider>
  );
};
