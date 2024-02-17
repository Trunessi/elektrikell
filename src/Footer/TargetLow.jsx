import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";

function TargetLow() {

  const bestUntil = useSelector((state) => state.main.bestUntil);

    return (
    <>
      <Row>
        <Col>Low price</Col>
      </Row>
      <Row>
        <Col>
          <Intervals />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            {bestUntil &&(
            <Countdown date={bestUntil * 1000}>
              <div>The time is now!</div>
            </Countdown>)}
          </h1>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
