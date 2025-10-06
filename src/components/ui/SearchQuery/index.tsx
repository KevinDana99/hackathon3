import {
  IoLocationOutline,
  IoSearch,
  IoCalendar,
  IoClose,
} from "react-icons/io5";
import useSearchQuery from "./hooks";
import { useEffect } from "react";

const SearchQuery = () => {
  const {
    startDate,
    endDate,
    handleChangeEndDate,
    handleChangeStartDate,
    handleChangeQuery,
    location,
    query,
    handleChangeLocation,
    country,
    locationOptions,
    activeOptions,
    setActiveOptions,
  } = useSearchQuery();
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="h-10 ">
        <div className="location flex w-100 justify-start items-center ">
          <div className="icoContainer flex justify-center items-center">
            <IoLocationOutline size={20} />
          </div>
          <div className="selectLocation flex flex-col">
            <label className="labelSelect text-[10px]  w-17 pl-1 box-border">
              Your location
            </label>
            <select name="" id="" className=" w-full">
              {country && <option value="opcion1">{country.name}</option>}
            </select>
          </div>
        </div>
      </div>
      <div className=" relative mt-5 inputContainer w-full h-12 outline-0 p-5 box-border flex justify-center items-center bg-gray-200 text-gray-500 rounded-xl">
        <IoSearch size={20} />
        <input
          placeholder="Search loaction"
          type="text"
          className="text w-full relative h-10 p-2 box-border ml-2 z-10"
          onChange={(e) => handleChangeQuery(e.target.value)}
          value={(location && location?.name) || (query ?? "")}
        />
        {locationOptions && activeOptions && (
          <div className="search-options absolute w-full h-auto bg-red-50 top-[50px] z-2">
            <ul className="menu bg-gray-200 rounded-box w-full">
              <li>
                <ul>
                  {locationOptions.map((option, index) => (
                    <li
                      onClick={() => {
                        handleChangeLocation({
                          name: option.display_name,
                          coords: { lat: option.lat, lon: option.lon },
                        });
                        setActiveOptions(false);
                      }}
                    >
                      <a>{option.display_name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
        <IoClose
          size={20}
          onClick={() => {
            handleChangeLocation(null);
            handleChangeQuery(null);
          }}
        />
      </div>
      <div className="container-date flex">
        <div className="mr-5 mt-5 inputContainer w-40 h-12 outline-0 p-5 box-border flex justify-center items-center bg-gray-200 text-gray-500 rounded-xl">
          <input
            type="date"
            value={today}
            min={today}
            onChange={(e) => handleChangeStartDate(e.target.value)}
          />
        </div>
        <div className="mr-5 mt-5 inputContainer w-40 h-12 outline-0 p-5 box-border flex justify-center items-center bg-gray-200 text-gray-500 rounded-xl">
          <input
            type="date"
            onChange={(e) => handleChangeEndDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchQuery;
