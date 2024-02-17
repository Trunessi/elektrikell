import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { setShowSideBar } from "../services/stateService";
import { useDispatch } from "react-redux";

function Logo() {
  const dispatch = useDispatch();
  const handleOpenSideBar = () => {
    dispatch(setShowSideBar(true));
  };

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
