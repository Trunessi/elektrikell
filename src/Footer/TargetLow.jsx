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
         <h1>CountDown</h1>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
