import { FC, ReactNode } from "react";

interface IListItemProps {
  children: ReactNode;
}

const ListItem: FC<IListItemProps> = ({ children }) => {
  return (
    <div className="py-1 px-2 cursor-pointer hover:bg-slate-100">
      {children}
    </div>
  );
};

export default ListItem;
