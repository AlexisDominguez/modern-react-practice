import { VscNewFile } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";

const HeaderActionsModule = () => {
  return (
    <div className="flex items-center">
      <button className="flex items-center bg-indigo-600 text-white py-2 px-2">
        <VscNewFile className="text-white text-xl" />
      </button>
      <button className="flex items-center bg-indigo-600 text-white py-2 px-2 ml-3">
        <MdOutlineDelete className="text-white text-xl" />
      </button>
    </div>
  );
};

export default HeaderActionsModule;
