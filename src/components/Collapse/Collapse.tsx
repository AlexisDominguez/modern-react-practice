import { useState, FC, ReactNode } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

interface ICollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: FC<ICollapseProps> = ({ children, title }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpen = (): void => {
    setOpen(!open);
  };

  return (
    <div>
      <h1
        className="bg-stone-200 py-1 px-2 font-bold flex items-center cursor-pointer"
        onClick={() => handleSetOpen()}
      >
        {!open ? (
          <FaChevronRight className="mr-1" />
        ) : (
          <FaChevronDown className="mr-1" />
        )}
        {title}
      </h1>
      {open && children}
    </div>
  );
};

export default Collapse;
