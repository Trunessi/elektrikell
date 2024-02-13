import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Logo({ handleOpenSideBar }) {
  return (
    <>
      <Col className="text-end">
        <Button variant="primary" size="sm" onClick={handleOpenSideBar}>
          Search
        </Button>
      </Col>
    </>
  );
}

export default Logo;
