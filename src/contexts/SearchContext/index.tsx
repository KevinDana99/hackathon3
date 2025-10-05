import { createContext, useEffect, useState, type ReactNode } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";

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
  handleChangeStartDate: (date: string) => void;
  handleChangeEndDate: (date: string) => void;
  handleChangeLocation: (
    location: { name: string; coords: string[] } | null
  ) => void;
};
export const SearchQueryContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchQueryProvider = ({ children }: { children: ReactNode }) => {
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
        country,
        handleChangeLocation,
        handleChangeStartDate,
        handleChangeEndDate,
      }}
    >
      {children}
    </SearchQueryContext.Provider>
  );
};
