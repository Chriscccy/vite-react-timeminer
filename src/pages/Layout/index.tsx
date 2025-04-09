import "./index.scss";
import { Outlet } from "react-router-dom";

import TabNav from "../../components/TabNav";

const Layout: React.FC = () => {
  return (
    <div className="Layout light-theme">
      <div className="ContentBody">
        <Outlet />
      </div>
      <div className="TabNavBottom">
        <TabNav />
      </div>
    </div>
  );
};

export default Layout;
