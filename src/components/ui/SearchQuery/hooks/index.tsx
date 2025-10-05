import React, { useContext, useEffect, useState } from "react";
import {
  SearchQueryContext,
  type SearchContextType,
} from "../../../../contexts/SearchContext";
import type { OptionLocationsType } from "./types";

const useSearchQuery = () => {
  const context: SearchContextType = useContext(SearchQueryContext);
  const { country, handleChangeLocation, location } = context;
  const [query, setQuery] = useState<string | null>(null);
  const [activeOptions, setActiveOptions] = useState(false);
  const [locationOptions, setLocationOptions] =
    useState<null | OptionLocationsType>(null);
  const handleChangeQuery = (value: string) => {
    setQuery(value);
  };

  const handleSearchLocation = async () => {
    try {
      const req = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
          query ?? ""
        )}&country=${encodeURIComponent(
          country.name
        )}&format=json&addressdetails=1&limit=5`
      );
      const res = await req.json();
      console.log({ res });
      setLocationOptions(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleSearchLocation();
    setActiveOptions(true);
  }, [query]);

  useEffect(() => {
    console.log({ location });
  }, [location]);
  return {
    ...context,
    handleChangeQuery,
    query,
    locationOptions,
    handleChangeLocation,
    activeOptions,
    setActiveOptions,
  };
};

export default useSearchQuery;
