import type { ReactNode, JSX } from "react";

const DashboardItem = ({
  ico,
  status = "lluvia",
  probability = 0.3,
}: {
  ico: JSX.Element;
  status: string;
  probability: number;
}) => {
  return (
    <>
      <div className="shadow-xl w-xs h-70 p-8  rounded-lg dark:bg-gray-50 dark:text-gray-800 flex justify-center">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center">
            {ico}
            <span className="text-4xl font-semibold">{status}</span>
            {probability}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardItem;
