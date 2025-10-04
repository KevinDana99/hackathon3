import { IoLeafOutline, IoRainyOutline, IoSunnyOutline } from "react-icons/io5";

const Categories = () => {
  return (
    <div className="flex ">
      <div className="text-xl mr-2 pill w-auto h-5 p-5 bg-white rounded-2xl text-gray-600 flex  items-center">
        <IoLeafOutline className="mr-2" size={20} /> Eolica
      </div>
      <div className="text-xl mr-2 pill w-auto h-5 p-5 bg-white rounded-2xl text-gray-600 flex  items-center">
        <IoSunnyOutline className="mr-2" size={25} /> Solar
      </div>
      <div className="text-xl mr-2 pill w-auto h-5 p-5 bg-white rounded-2xl text-gray-600 flex items-center">
        <IoRainyOutline className="mr-2" size={25} /> Lluvias
      </div>
    </div>
  );
};

export default Categories;
