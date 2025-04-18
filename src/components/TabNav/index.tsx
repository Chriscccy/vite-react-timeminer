import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { TabBar } from "antd-mobile";
import { PiGraphicsCardBold } from "react-icons/pi";

import { LuPickaxe, LuBlocks, LuCircleUser, LuWallet } from "react-icons/lu";

const TabNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const tabs = [
    {
      key: "/dashboard",
      title: "Dashboard",
      icon: <LuBlocks />,
    },
    {
      key: "/stake",
      title: "Stake",
      icon: <PiGraphicsCardBold />,
    },
    {
      key: "/mine",
      title: "Mine",
      icon: <LuPickaxe />,
    },
    {
      key: "/wallet",
      title: "Wallet",
      icon: <LuWallet />,
    },
    {
      key: "/account",
      title: "Account",
      icon: <LuCircleUser />,
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
