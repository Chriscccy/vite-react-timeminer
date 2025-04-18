import "./index.scss";
import MineCard from "../../../components/MineCard";
import AddMachineCard from "../../../components/AddMachineCard";
import { bitcoinSvg, usdtSvg } from "../../../assets/svg/icon";
import { Grid } from "antd-mobile";

const demodata = [
  {
    machineName: "Machine 1",
    startTime: "2025-04-14 17:00:00",
    endTime: "",
  },
  {
    machineName: "Machine 2",
    startTime: "2025-04-15 17:00:00",
    endTime: "2025-04-20 19:00:00",
  },
  {
    machineName: "Machine 3",
    startTime: "2025-04-14 17:00:00",
    endTime: "2025-04-14 19:00:00",
  },
];

const Mine: React.FC = () => {
  return (
    <div className="Mine-Container">
      <Grid columns={2} gap={12}>
        {demodata.map((item, index) => (
          <MineCard
            key={index} // 确保唯一性，使用 index 或更适合的 id
            machineName={item.machineName}
            svg={usdtSvg} // 示例：交替使用 SVG
            startTime={item.startTime}
            endTime={item.endTime}
          />
        ))}
        <Grid.Item span={2}>
          <AddMachineCard />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Mine;
