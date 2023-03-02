import PortfoliosListModule from "../../modules/PortfoliosListModule";
import NotebooksListModule from "../../modules/NotebooksListModule";
import NotesListModule from "../../modules/NotesListModule";

const Sidebar = () => {
  return (
    <div className="w-60 border border-r-stone-300">
      <PortfoliosListModule />
      <NotebooksListModule />
      <NotesListModule />
    </div>
  );
};

export default Sidebar;
