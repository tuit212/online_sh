import { Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Discounts from "./common/Discounts/Discounts.jsx";
import Main from "./components/Main/Main";
import NotFound from "./common/404/NotFound";
import Like from "./common/Like/Like";
import Card from "./common/Card/Card";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Discounts" element={<Discounts/>} />
        <Route path="/like" element={<Like/>} />
        <Route path="/cart" element={<Card/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
