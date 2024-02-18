import { useSelector } from "react-redux";
import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { BADGES } from "./constants";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

function PriceBadge() {
  const { values } = useContext(ElectricPriceContext);
  let currentBadge = 1;

    if (values.currentPriceData > values.averagePrice) {
      currentBadge = 2;
    }
    if (values.currentPriceData < values.averagePrice) {
      currentBadge = 0;
    }

  return (
    <>
      <Badge bg={BADGES[currentBadge].name}>{BADGES[currentBadge].id}</Badge>
    </>
  );
}

export default PriceBadge;
