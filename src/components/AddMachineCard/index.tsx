import { Popup, Tabs, Swiper, SwiperRef } from "antd-mobile";

import { IoIosAddCircleOutline } from "react-icons/io";
import "./index.scss";
import { useState, useRef } from "react";

import AddMachineByUSDT from "./ByUSDT";
import AddMachineByTMTD from "./ByTMTD";

const tabItems = [
  { key: "TMTD", title: "TMTD" },
  { key: "USDT", title: "USDT" },
];

const AddMachineCard: React.FC = () => {
  const [visible1, setVisible1] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (key: string) => {
    const index = tabItems.findIndex((item) => item.key === key);
    setActiveIndex(index);
    swiperRef.current?.swipeTo(index);
  };

  const togglePopup = () => setVisible1((prev) => !prev);

  return (
    <>
      <div className="AddMachineCard-Container">
        <div className="AddMachineCard-Warp" onClick={togglePopup}>
          <IoIosAddCircleOutline
            style={{ color: "lime", fontSize: "42px", width: "100%" }}
          />
        </div>
      </div>

      <Popup
        visible={visible1}
        showCloseButton
        onMaskClick={togglePopup}
        onClose={togglePopup}
        bodyStyle={{
          height: "80vh",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <div className="AddMachine-Popup-Container">
          <div className="Popup-Header">Add Machine</div>
          <div className="Popup-Content">
            <Tabs
              activeKey={tabItems[activeIndex].key}
              onChange={handleTabChange}
            >
              {tabItems.map((item) => (
                <Tabs.Tab title={item.title} key={item.key} />
              ))}
            </Tabs>
            <Swiper
              direction="horizontal"
              loop
              indicator={() => null}
              ref={swiperRef}
              defaultIndex={activeIndex}
              onIndexChange={(index) => setActiveIndex(index)}
              className="Swiper-Container"
            >
              <Swiper.Item>
                <AddMachineByTMTD />
              </Swiper.Item>
              <Swiper.Item>
                <AddMachineByUSDT />
              </Swiper.Item>
            </Swiper>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default AddMachineCard;
