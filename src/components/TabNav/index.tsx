import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { TabBar } from "antd-mobile";
import { UserOutline } from "antd-mobile-icons";

import { LuPickaxe, LuBlocks } from "react-icons/lu";

const TabNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const tabs = [
    {
      key: "/dashboard",
      title: "Dash",
      icon: <LuBlocks />,
    },
    {
      key: "/mine",
      title: "Mine",
      icon: <LuPickaxe />,
    },
    {
      key: "/setting",
      title: "Setting",
      icon: <UserOutline />,
    },
  ];

  const onTabNavClick = (route: any) => {
    const path = route.key;
    navigate(path);
  };

  return (
    <TabBar activeKey={pathname} className="TabNavComponent">
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          onClick={() => onTabNavClick(item)}
        />
      ))}
    </TabBar>
  );
};

export default TabNav;
