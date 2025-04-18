import "./index.scss";
import { Card, Swiper, Image, Toast, Grid } from "antd-mobile";
import AssetsCard from "../../../components/AssetsCard";
import { bitcoinSvg, usdtSvg } from "../../../assets/svg/icon";
import MachineCard from "../../../components/MachinesCard";

const caroselImg = [
  { imgurl: "https://img.yzcdn.cn/vant/apple-1.jpg", title: "1号片段" },
  { imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg", title: "2号片段" },
  { imgurl: "https://img.yzcdn.cn/vant/apple-3.jpg", title: "3号片段" },
];

const items = caroselImg.map((index) => (
  <Swiper.Item key={index.imgurl}>
    <div
      className="Carosel"
      onClick={() => {
        Toast.show(`你点击了卡片 ${index.title}`);
      }}
    >
      <Image src={index.imgurl} />
    </div>
  </Swiper.Item>
));

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard-Container">
      <Swiper className="Swiper" loop autoplay>
        {items}
      </Swiper>
      {/* <Card title="Dashboard">tawdad</Card> */}
      <Card
        title="Assets"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
        }}
      >
        <div className="Assets-Container card-inner ">
          <AssetsCard
            svg={bitcoinSvg}
            currencyName="TMTD"
            balance="1,000,000,000"
          />
          <AssetsCard
            svg={bitcoinSvg}
            currencyName="TMYM"
            balance="1,000,000,000"
          />
          <AssetsCard
            svg={usdtSvg}
            currencyName="USDT"
            balance="1,000,000,000"
          />
          <AssetsCard
            svg={bitcoinSvg}
            currencyName="TMTY"
            balance="1,000,000,000"
          />
        </div>
      </Card>
      <Card
        title="Machines Status"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
        }}
      >
        <div className="card-inner">
          <Grid columns={2} gap={12}>
            <MachineCard
              svg={bitcoinSvg}
              machineName="TMTD"
              status="Active"
              statusColor="success"
            />
            <MachineCard
              svg={bitcoinSvg}
              machineName="TMTD"
              status="Active"
              statusColor="success"
            />
            <MachineCard
              svg={bitcoinSvg}
              machineName="TMTD"
              status="Active"
              statusColor="success"
            />
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
