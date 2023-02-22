import { Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Discounts from "./common/Discounts/Discounts.jsx";
import Main from "./components/Main/Main";
import NotFound from "./common/404/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Discounts" element={<Discounts/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
