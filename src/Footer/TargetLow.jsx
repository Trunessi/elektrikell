import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";

function TargetLow(props) {

  const { bestUntil } = props;

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
