import { useState, useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  const [showSideBar, setShowSiteBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseSideBar = () => setShowSiteBar(false);
  const handleOpenSideBar = () => setShowSiteBar(true);

  useEffect(() => {
    if(params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);

  return (
    <Container>
      <Head
        handleOpenSideBar={handleOpenSideBar}
        setErrorMessage={setErrorMessage}
      />
      {isLoading && (
        <h1 className={"d-flex justify-content-center"}>
          <Loading /> Loading...
        </h1>
      )}
      <Body
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
        setIsLoading={setIsLoading}
      />
      <Footer bestUntil={bestUntil} />

      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />

      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </Container>
  );
}

export default ElectricPrice;
