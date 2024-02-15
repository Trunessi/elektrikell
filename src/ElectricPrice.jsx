import { useState, useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTONS } from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import { getDefaultFrom, getDefaultUntil } from "./utils/dates";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

function ElectricPrice() {
  const params = useParams();

  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTONS);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSiteBar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseSideBar = () => setShowSiteBar(false);
  const handleOpenSideBar = () => setShowSiteBar(true);

  useEffect(() => {
    if(params.hours) setActiveHour(+params.hours);
  }, [params]);

  return (
    <Container>
      <Head
        activePrice={activePrice}
        setActivePrice={setActivePrice}
        handleOpenSideBar={handleOpenSideBar}
        setErrorMessage={setErrorMessage}
      />
      {isLoading && (
        <h1 className={"d-flex justify-content-center"}>
          <Loading /> Loading...
        </h1>
      )}
      <Body
        activeHour={activeHour}
        from={from}
        until={until}
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
        setIsLoading={setIsLoading}
      />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
        bestUntil={bestUntil}
      />
      <LeftSideBar
        show={showSideBar}
        handleClose={handleCloseSideBar}
        from={from}
        until={until}
        setFrom={setFrom}
        setUntil={setUntil}
      />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </Container>
  );
}

export default ElectricPrice;