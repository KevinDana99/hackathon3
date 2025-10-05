import {
  type ReactNode,
  type JSX,
  useState,
  useEffect,
  useContext,
} from "react";

import {
  SearchQueryContext,
  type SearchContextType,
} from "../../../../contexts/SearchContext";
import formetDayToApi from "../../../../helpers/dates";

const DashboardItem = ({
  ico,
  name = "lluvia",
}: {
  ico: JSX.Element;
  name: string;
}) => {
  const context: SearchContextType = useContext(SearchQueryContext);
  const { endDate, startDate, location, config } = context;

  const [probability, setProbability] = useState(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  const fetching = async () => {
    console.log(startDate);
    const req = await fetch(
      `http://localhost:3000/${name}?startDate=${formetDayToApi(
        startDate
      )}&endDate=${formetDayToApi(endDate)}&latitude=${
        location?.coords?.lat
      }&longitude=${location?.coords?.lon}&lowerThan=0`
    );
    const res = await req.json();
    setProbability(res.p);
  };
  useEffect(() => {
    if (startDate && endDate && location) {
      fetching();
    } else {
      return;
    }
  }, [startDate, endDate, location]);
  useEffect(() => {
    const calc = Math.round(probability * 100);
    setPercentage(calc);
  }, [probability]);

  const [itemRange, setItemRange] = useState(null);

  useEffect(() => {
    setItemRange(percentage);
  }, [percentage]);
  const handleOnChangeRange = (e) => {
    setItemRange(e.target.value);
  };

  return (
    <>
      <div className="flex mt-5 mr-5 flex-col items-center shadow-xl w-xs h-90 p-8  rounded-lg dark:bg-gray-50 dark:text-gray-800  justify-center">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center">
            {ico}
            <span className="text-4xl font-semibold mt-2">{name}</span>
          </div>
        </div>

        <input
          disabled
          type="range"
          min={0}
          max="100"
          value={itemRange}
          className="range range-primary mt-2"
          onChange={handleOnChangeRange}
        />
        <span className="text-3xl font-semibold mt-2">
          {itemRange}% chances
        </span>
        <span className="text-2xl font-semibold mt-2">
          of temperature higher than 39°C
        </span>
      </div>
    </>
  );
};

export default DashboardItem;
/*
      <div className="minmax flex justify-between w-full">
          <span>min</span>
          <span>max</span>
        </div>*/
