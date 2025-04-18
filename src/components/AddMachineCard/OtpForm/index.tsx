import { Form, Button, Input, Toast } from "antd-mobile";
import {
  EyeInvisibleOutline,
  EyeOutline,
  ExclamationCircleOutline,
} from "antd-mobile-icons";
import { useState } from "react";
import "./index.scss";

interface OtpFormComponentProps {
  id: string;
  onFinish: any;
  bttLoading: boolean;
  otpDisable: boolean;
}

const OtpFormComponent: React.FC<OtpFormComponentProps> = ({
  onFinish,
  bttLoading,
  otpDisable,
  id,
}) => {
  const [form] = Form.useForm();
  const [otpVisible, setOtpVisible] = useState(false);

  const onlyOTP = (value: any) => {
    const fileredValue = value.replace(/\D/g, "").slice(0, 6);
    form.setFieldsValue({ totp: fileredValue });
  };

  const handle = (values: any) => {
    if (values.totp.length !== 6) {
      if (!values.totp) {
        return;
      }
      Toast.show({
        content: `OTP is required 6 Digit`,
        icon: <ExclamationCircleOutline />,
      });
      return;
    }
    onFinish(values);
    setOtpVisible(false);
    form.resetFields();
  };

  return (
    <div className="Otp-Form">
      <Form
        layout="horizontal"
        onFinish={handle}
        form={form}
        initialValues={{ totp: "" }}
      >
        {otpDisable ? (
          <></>
        ) : (
          <Form.Item
            name="totp"
            label="OTP"
            className="item-otp"
            extra={
              <div className="OTP-Icon">
                {!otpVisible ? (
                  <EyeInvisibleOutline onClick={() => setOtpVisible(true)} />
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
              id={`${id}_totp`}
            />
          </Form.Item>
        )}
        <div className="FormOtp-Button">
          <Button
            block
            loading={bttLoading}
            loadingText="Processing"
            type="submit"
            shape="rounded"
            size="large"
            style={{
              "--background-color": "lime",
              "--text-color": "black",
              fontWeight: "bold",
            }}
          >
            Confirm
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default OtpFormComponent;
