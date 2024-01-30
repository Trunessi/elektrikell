import { useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTONS } from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTONS);
  const [activeHour, setActiveHour] = useState();
  const [showSideBar, setShowSiteBar] = useState(false);
  
  const handleCloseSideBar = () => setShowSiteBar(false);
  const handleOpenSideBar = () => setShowSiteBar(true);

  return (
    <Container>
      <Head 
        activePrice={activePrice} 
        setActivePrice={setActivePrice}
        handleOpenSideBar={handleOpenSideBar}
         />
      <Body activeHour={activeHour} />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
      />
      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />
    </Container>
  );
}

export default App;
