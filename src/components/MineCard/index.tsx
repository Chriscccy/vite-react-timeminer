import "./index.scss";
import {
  ProgressCircle,
  Image,
  Tag,
  Popup,
  Button,
  Form,
  Input,
  Toast,
} from "antd-mobile";
import {
  EyeInvisibleOutline,
  EyeOutline,
  ExclamationCircleOutline,
} from "antd-mobile-icons";
import { useState, useEffect } from "react";

interface MineCardProps {
  svg: string;
  machineName: string;
  startTime: string;
  endTime: string;
}

const MineCard: React.FC<MineCardProps> = ({
  svg,
  machineName,
  startTime,
  endTime,
}) => {
  const [visible1, setVisible1] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const startT = new Date(startTime); // 开始时间
  const endT = new Date(endTime); // 结束时间
  const [percent, setPercent] = useState<number>(0); // 当前时间的百分比
  const [status, setStatus] = useState<string>("nan");
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    if (!values.totp) {
      return;
    }

    if (values.totp.length !== 6) {
      Toast.show({
        content: `OTP is required 6 Digit`,
        icon: <ExclamationCircleOutline />,
      });
      return;
    }

    values = { id: machineName, ...values };
    console.log(values);

    setVisible1(false);
    setOtpVisible(false);

    Toast.show({
      content: `Data Submitted`,
      icon: "success",
    });

    form.resetFields();
  };

  const onlyOTP = (value: any) => {
    const fileredValue = value.replace(/\D/g, "").slice(0, 6);
    form.setFieldsValue({ totp: fileredValue });
  };

  useEffect(() => {
    // 仅在组件挂载时计算一次百分比
    const calculatePercent = () => {
      const now = new Date(); // 获取当前时间
      const totalTime = endT.getTime() - startT.getTime(); // 时间区间总长度（毫秒）
      const elapsedTime = now.getTime() - startT.getTime(); // 当前时间已过的时间（毫秒）

      if (elapsedTime >= totalTime) {
        setPercent(100); // 当前时间超过结束时间，百分比为 100
        setStatus("Completed");
      } else if (elapsedTime <= 0 || isNaN(elapsedTime) || isNaN(totalTime)) {
        setPercent(0); // 当前时间在开始时间之前，百分比为 0
        setStatus("nan");
      } else {
        setPercent((elapsedTime / totalTime) * 100); // 计算百分比
        setStatus("Mining");
      }
    };

    calculatePercent(); // 初始化时计算百分比
  }, []); // 依赖 `startTime` 和 `endTime`，仅在这些值变更时重新运行

  return (
    <>
      <div className="MineCard-Container" onClick={() => setVisible1(true)}>
        <div style={{ fontWeight: "bold" }}>{machineName}</div>
        <ProgressCircle
          percent={percent} // 动态显示百分比
          style={{
            "--size": "80px",
            "--fill-color": "lime",
            "--track-width": "4px",
            "--track-color": "var(--color-layout-background)",
          }}
        >
          <Image
            src={svg}
            alt={`${machineName} Icon`}
            style={{ width: 42, alignItems: "center", display: "flex" }}
          />
          <span>{percent.toFixed(0)}%</span>
        </ProgressCircle>
        <div>
          <Tag
            round
            style={{ fontWeight: "bold" }}
            color={
              status === "Completed"
                ? "green"
                : status === "nan"
                ? "default"
                : "warning"
            }
          >
            {status === "Completed"
              ? "Completed"
              : status === "nan"
              ? "Hibernate"
              : "Mining"}
          </Tag>
        </div>
      </div>
      <Popup
        visible={visible1}
        showCloseButton
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        bodyStyle={{
          height: "80vh",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <div className="Mine-Popup-Container">
          <div className="Popup-Header">{machineName}</div>
          <div className="Popup-Content">Machine Status</div>

          <Form
            layout="horizontal"
            className="Otp-Form"
            onFinish={onFinish}
            form={form}
            initialValues={{ totp: "" }}
          >
            {status === "Mining" ? (
              <></>
            ) : (
              <Form.Item
                name="totp"
                label="OTP"
                className="item-otp"
                extra={
                  <div className="OTP-Icon">
                    {!otpVisible ? (
                      <EyeInvisibleOutline
                        onClick={() => setOtpVisible(true)}
                      />
                    ) : (
                      <EyeOutline onClick={() => setOtpVisible(false)} />
                    )}
                  </div>
                }
              >
                <Input
                  clearable
                  type={otpVisible ? "text" : "password"}
                  onChange={onlyOTP}
                  autoComplete="off"
                />
              </Form.Item>
            )}
            <div className="Popup-Button-Container">
              <Button
                block
                loading={status === "Mining" ? true : false}
                loadingText="Mining "
                type="submit"
                shape="rounded"
                size="large"
                style={{
                  "--background-color": "lime",
                  "--text-color": "black",
                  fontWeight: "bold",
                }}
              >
                {status === "nan" ? "Start Mining" : "Collect"}
              </Button>
            </div>
          </Form>
        </div>
      </Popup>
    </>
  );
};

export default MineCard;
