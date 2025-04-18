import { useState } from "react";
import "./index.scss";
import { Toast } from "antd-mobile";
import OtpFormComponent from "../OtpForm";

const AddMachineByTMTD: React.FC = () => {
  const [otpDisable, setOtpDisable] = useState(false);
  const [bttLoading, setBttoading] = useState(false);

  const handle = async (values: any) => {
    setOtpDisable(true);
    setBttoading(true);
    try {
      Toast.show({
        content: `Data Submitted`,
        icon: "success",
      });
    } catch (error: any) {
      console.log("catched error");
    }
    setOtpDisable(false);
    setBttoading(false);

    console.log(values);
  };

  return (
    <div className="Swiper-Content AddMachineByTMTD">
      <div>By TMTD</div>

      <div style={{ width: "100%" }}>
        <OtpFormComponent
          id={"AddMachineByTMTD"}
          onFinish={handle}
          bttLoading={bttLoading}
          otpDisable={otpDisable}
        />
      </div>
    </div>
  );
};

export default AddMachineByTMTD;
