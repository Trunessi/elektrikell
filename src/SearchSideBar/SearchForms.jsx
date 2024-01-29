import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="dateFrom">
        <Form.Label>From:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dateUntil">
        <Form.Label>Until:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="secondary" type="submit" size="sm">
        Search
      </Button>
    </Form>
  );
}

export default SearchForms;
