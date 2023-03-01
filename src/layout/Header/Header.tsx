import { VscNewFile } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";

const Header = () => {
  return (
    <header className="h-16 border border-b-stone-300 flex items-center p-4 justify-between">
      <h1 className="font-bold text-xl">
        This is an example of a note's title
      </h1>
      <div className="flex items-center">
        <button className="flex items-center bg-indigo-600 text-white py-2 px-2">
          <VscNewFile className="text-white text-xl" />
        </button>
        <button className="flex items-center bg-indigo-600 text-white py-2 px-2 ml-3">
          <MdOutlineDelete className="text-white text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
