import type { JSX } from "@emotion/react/jsx-runtime";

const ConfigCard = ({ ico, name }: { ico: JSX.Element; name: string }) => {
  return (
    <div className="flex mt-5 mr-5 flex-col shadow-xl w-xs h-90 p-8  rounded-lg dark:bg-gray-50 dark:text-gray-800 items-center">
      <div className="flex justify-between space-x-8">
        <div className="flex justify-center items-center  h-20">
          <div className="flex items-center justify-center">{ico}</div>
          <span className="text-2xl font-semibold mt-2 ml-2 ">{name}</span>
        </div>
      </div>

      <div className="minmax flex flex-col w-36 items-start">
        <div className="mt-3 inputContainer flex justify-between w-full items-center">
          <span>min</span>
          <input
            className="w-20 h-10 bg-gray-100 pl-5"
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="mt-3 inputContainer flex justify-between w-full items-center">
          <span>max</span>
          <input
            className="w-20 h-10 bg-gray-100 pl-5"
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="mt-3 inputContainer flex justify-between w-full items-center">
          <span>unity</span>
          <select
            defaultValue="Pick a color"
            className="select bg-gray-100 w-20 h-10 "
          >
            <option>-</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="visible mt-3 inputContainer flex justify-between w-full items-center">
          visible
          <input
            type="checkbox"
            checked={true}
            className="w-13 h-8 toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfigCard;
