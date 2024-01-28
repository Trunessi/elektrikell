import { useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTONS } from "./Head";
import Footer from "./Footer";
// import SearchSideBar from "./SearchSideBar";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTONS);
  const [activeHour, setActiveHour] = useState();

  return (
    <Container>
      {/* <SearchSideBar/> */}
      <Head activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body activeHour={activeHour} />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
      />
    </Container>
  );
}

export default App;
