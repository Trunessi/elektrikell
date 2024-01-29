import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForms from "./SearchForms";

function SearchSideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow}>
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForms />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SearchSideBar;
