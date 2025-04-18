import "./index.scss";
import { Outlet } from "react-router-dom";
import { DotLoading } from "antd-mobile";
import TabNav from "../../components/TabNav";
import { useState } from "react";

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // 渲染逻辑
  if (loading) {
    return (
      <div className="LoadingWrapper">
        <div>
          <span>Loading</span>
          <DotLoading color="currentColor" />
        </div>
      </div>
    );
  }

  return (
    <div className="Layout dark-theme">
      <div className="Content-Body">
        <div className="Content-Container">
          <Outlet />
        </div>
      </div>
      <div className="TabNavBottom">
        <TabNav />
      </div>
    </div>
  );
};

export default Layout;
