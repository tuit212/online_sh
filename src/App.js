import { Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Discounts from "./common/Discounts/Discounts.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/Discounts" element={<Discounts/>} />
      </Routes>
    </div>
  );
}

export default App;
