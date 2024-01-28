import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";

function TargetLow(props) {
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
          <p>The best time for this is from 0:00 to 1:00, which is left</p>
          Clock Then the price per kilowatt hour is 9.17 cents, which is 12%
          cheaper than now
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
