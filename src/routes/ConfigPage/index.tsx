import Config from "../../components/Config";
import Footer from "../../components/layout/Footer";
import { ToastContainer, toast } from "react-toastify";
import useConfig from "../../hooks/useConfig";
import {
  SearchQueryContext,
  type SearchContextType,
} from "../../contexts/SearchContext";
import { useContext } from "react";
const ConfigPage = () => {
  const context: SearchContextType = useContext(SearchQueryContext);
  const { handleSaveAllChanges } = context;

  return (
    <div className="flex flex-col justify-between h-auto bg-white min-h-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full h-20 bg-blue-500 p-5 box-border flex items-center justify-between z-10 fixed top-0">
        <div className="flex justify-center items-center">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <span className="text-xl ml-2">Settings</span>
        </div>
        <button
          className="btn btn-primary w-30 bg-white text-gray-950"
          onClick={() => {
            handleSaveAllChanges();
            toast.success("Saved changes");
          }}
        >
          Save
        </button>
      </div>
      <div className="pt-[80px] w-full relative">
        <Config />
      </div>
      <Footer />
    </div>
  );
};

export default ConfigPage;
