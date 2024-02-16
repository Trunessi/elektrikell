import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS, BADGES } from "./constants";
import Badge from "react-bootstrap/Badge";
import { getCurrentPrice } from "../services/apiService";
import { mwToKw, addTax } from "../utils/priceFormats";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice } from "../services/stateService";
import { setErrorMessage } from "../services/stateService";

function Info() {

  const dispatch = useDispatch();
  const [currentPriceData, setCurrentPrice] = useState(0);
  const activePrice = useSelector((state) => state.main.activePrice);

  useEffect(() => {
    (async () => {
      try {
        const { data, success } = await getCurrentPrice();

        if (!success) throw new Error();

        setCurrentPrice(addTax(mwToKw(data[0].price), "ee"));
      } catch {
        dispatch(setErrorMessage(ERROR_MESSAGE));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Col>
        <div>The current price of electricity is</div>
        <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
      </Col>
      <Col>
        <ButtonGroup>
          {PRICE_BUTTONS.map(({ name, id }) => (
            <Button
              key={id}
              active={activePrice === id}
              onClick={() => dispatch(setActivePrice(id))}
              variant="secondary"
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
      <Col className="text-end">
        <h2>{currentPriceData}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
}

export default Info;
