import { type ReactNode, type JSX, useState } from "react";

const DashboardItem = ({
  ico,
  status = "lluvia",
  probability = 0.3,
}: {
  ico: JSX.Element;
  status: string;
  probability: number;
}) => {
  const percentage = probability * 100;

  const [itemRange, setItemRange] = useState(percentage);

  const handleOnChangeRange = (e) => {
    setItemRange(e.target.value);
  };
  return (
    <>
      <div className="flex mt-5 mr-5 flex-col items-center shadow-xl w-xs h-90 p-8  rounded-lg dark:bg-gray-50 dark:text-gray-800  justify-center">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center">
            {ico}
            <span className="text-4xl font-semibold mt-2">{status}</span>

            <span className="text-3xl font-semibold mt-2">{itemRange}%</span>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max="100"
          value={itemRange}
          className="range range-primary mt-2"
          onChange={handleOnChangeRange}
        />
        <div className="minmax flex justify-between w-full">
          <span>min</span>
          <span>max</span>
        </div>
      </div>
    </>
  );
};

export default DashboardItem;
