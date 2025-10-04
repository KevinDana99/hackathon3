import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-40 bg-green-800">
      <div className="h-15 p-5 box-border bg-blue-400">
        <div className="location flex w-30 justify-center items-center bg-amber-600">
          <div className="icoContainer flex justify-center items-center">
            <IoLocationOutline size={20} className=" bg-red-400" />
          </div>
          <div className="selectLocation flex flex-col">
            <label className="labelSelect text-[10px] bg-yellow-500 w-17 pl-1 box-border">
              Your location
            </label>
            <select name="" id="" className="bg-yellow-500 w-full">
              <option value="opcion1">San Antione</option>
              <option value="opcion2">opcion2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="inputContainer w-full bg-orange-400 h-20 p-2 pl-5 pr-5 box-border">
        <input
          placeholder="Search for service"
          type="text"
          className="text bg-red-400 w-full p-2 box-border"
        />
      </div>
    </div>
  );
};

export default Navbar;
