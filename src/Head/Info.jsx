import { useEffect, useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS } from "./constants";
import { getCurrentPrice } from "../services/apiService";
import { mwToKw, addTax } from "../utils/priceFormats";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../services/stateService";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";
import PriceBadge from "./PriceBadge";

function Info() {
  const dispatch = useDispatch();

  const { actions, values } = useContext(ElectricPriceContext);

  const activePrice = useSelector((state) => state.main.activePrice);
 
  useEffect(() => {
    (async () => {
      try {
        const { data, success } = await getCurrentPrice();

        if (!success) throw new Error();

        actions.setCurrentPrice(addTax(mwToKw(data[0].price), "ee"));
      } catch {
        dispatch(setErrorMessage(ERROR_MESSAGE));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Col>
        <div>The current price of electricity is</div>
        <PriceBadge/>
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
        <h2>{values.currentPriceData}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
}

export default Info;
