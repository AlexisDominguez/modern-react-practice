import Sidebar from "../Sidebar";
import Main from "../Main";

const Container = () => {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Container;
