import { IoLocationOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-40 bg-blue-500 p-5 box-border">
      <div className="h-15">
        <div className="location flex w-30 justify-center items-center ">
          <div className="icoContainer flex justify-center items-center">
            <IoLocationOutline size={20} />
          </div>
          <div className="selectLocation flex flex-col">
            <label className="labelSelect text-[10px]  w-17 pl-1 box-border">
              Your location
            </label>
            <select name="" id="" className=" w-full">
              <option value="opcion1">San Antione</option>
              <option value="opcion2">opcion2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="inputContainer w-full h-15 p-5 box-border flex justify-center items-center bg-gray-200 text-gray-500 rounded-2xl">
        <IoSearch size={20} />
        <input
          placeholder="Search for service"
          type="text"
          className="text w-full h-10 p-2 box-border ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
