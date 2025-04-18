import React from "react";
import { Card, Image, Tag } from "antd-mobile";
import "./index.scss";

interface MachinesCardProps {
  svg: string;
  machineName: string;
  status: string;
  statusColor: string;
}

const MachineCard: React.FC<MachinesCardProps> = ({
  svg,
  machineName,
  status,
  statusColor,
}) => {
  return (
    <Card className="Machine-Card">
      <div className="Card-Row">
        <span>{machineName}</span>
        <Image src={svg} alt={`${machineName} Icon`} style={{ width: 24 }} />
        <Tag color={statusColor}>{status}</Tag>
      </div>
    </Card>
  );
};

export default MachineCard;
