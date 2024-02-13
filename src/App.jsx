import { Routes, Route } from "react-router-dom";
import ElectricPrice from "./ElectricPrice";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ElectricPrice />}>
          <Route path="lowprice/:hours" element={<ElectricPrice />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path=":id" element={<About />} />
          <Route path=":id/:name" element={<About />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
