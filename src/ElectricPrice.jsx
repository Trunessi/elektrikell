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
import { useSelector, useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";
import { setErrorMessage } from "./services/stateService";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.main.errorMessage);

  const [showSideBar, setShowSiteBar] = useState(false);
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
      />
      {isLoading && (
        <h1 className={"d-flex justify-content-center"}>
          <Loading /> Loading...
        </h1>
      )}
      <Body
        setBestUntil={setBestUntil}
        setIsLoading={setIsLoading}
      />
      <Footer bestUntil={bestUntil} />

      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />

      <ErrorModal
        show={!!errorMessage}
        handleClose={() => dispatch(setErrorMessage(null))}
      />
    </Container>
  );
}

export default ElectricPrice;
