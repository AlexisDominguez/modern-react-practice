import HeaderActionsModule from "../../modules/HeaderActionsModule/HeaderActionsModule";

const Header = () => {
  return (
    <header className="h-16 border border-b-stone-300 flex items-center p-4 justify-between">
      <h1 className="font-bold text-xl">
        This is an example of a note's title
      </h1>
      <HeaderActionsModule />
    </header>
  );
};

export default Header;
