import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Dot,
  ResponsiveContainer,
} from "recharts";
import { getPriceData } from "../services/apiService";
import { chartDataConvertor } from "../utils";
import { currentTimeStamp } from "../utils/dates";

function Body({ from, until }) {
  const [priceData, setPriceData] = useState(null);

  const renderDot = (line) => {
    const {
      payload: { timestamp },
    } = line;

    return timestamp === currentTimeStamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  };

  useEffect(() => {
    getPriceData(from, until).then(({ data }) =>
      setPriceData(chartDataConvertor(data.ee))
    );
  }, [from, until]);

  return (
    <Row className="body">
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" interval={1}/>
            <YAxis />
            <Tooltip />
            <Line
              type="stepAfter"
              dataKey="price"
              stroke="#8884d8"
              dot={renderDot}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
}

export default Body;
