import Col from "react-bootstrap/Col";
import logo from "./logo.svg";
import Button from "react-bootstrap/Button";

function Logo({ handleOpenSideBar }) {
  return (
    <>
      <Col>
        <img src={logo} alt="Logo" />
      </Col>
      <Col>
        <Button variant="secondary" size="sm" onClick={handleOpenSideBar}>
          Search
        </Button>
      </Col>
    </>
  );
}

export default Logo;
