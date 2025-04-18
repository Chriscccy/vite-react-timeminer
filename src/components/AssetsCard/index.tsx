import React from "react";
import { Card, Image } from "antd-mobile";
import "./index.scss";

interface AssetsCardProps {
  svg: string;
  currencyName: string;
  balance: string;
}

const AssetsCard: React.FC<AssetsCardProps> = ({
  svg,
  currencyName,
  balance,
}) => {
  return (
    <Card className="Assets-Card">
      <div className="Card-Row">
        <div className="Card-Row">
          <Image src={svg} alt={`${currencyName} Icon`} style={{ width: 24 }} />
          <span>{currencyName}</span>
        </div>
        <span>{balance}</span>
      </div>
    </Card>
  );
};

export default AssetsCard;
