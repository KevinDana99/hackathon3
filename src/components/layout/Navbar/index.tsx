import SearchQuery from "../../ui/SearchQuery";

const Navbar = () => {
  return (
    <div className="w-full h-auto bg-blue-500 p-5 box-border fixed top-0 z-10">
      <SearchQuery />
      <div className="categories-section mt-4"></div>
    </div>
  );
};

export default Navbar;
