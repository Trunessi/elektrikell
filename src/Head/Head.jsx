import Logo from "./Logo";
import Info from "./Info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchSideBar from "../SearchSideBar/SearchSideBar";

function Head(props) {
  return (
    <>
      <Row>
        <Col sm={2}>
          <Logo />
        </Col>
        <Col>
          <SearchSideBar />
        </Col>
      </Row>
      <Row>
        <Info {...props} />
      </Row>
    </>
  );
}

export default Head;
