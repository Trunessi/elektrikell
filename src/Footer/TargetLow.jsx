import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { getPriceData } from "../services/apiService";
import { chartDataConvertor } from "../utils";
import { currentTimeStamp } from "../utils/dates";

function TargetLow(props) {
  const [period, setPeriod] = useState(3600000);

  useEffect(() => {
    getPriceData(props.from, props.until).then(({ data }) => {
      let min = data.ee[0].price;
      let minTime = data.ee[0].timestamp;
      chartDataConvertor(data.ee).forEach((e) => {
        if (e.price < min) {
          min = e.price;
          minTime = e.timestamp;
        }
      });
      setPeriod((minTime - currentTimeStamp()) * 1000);
    });
  }, [props.from, props.until]);
  
  return (
    <>
      <Row>
        <Col>Low price</Col>
      </Row>
      <Row>
        <Col>
          <Intervals {...props} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            <Countdown date={Date.now() + period} />
          </h1>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
