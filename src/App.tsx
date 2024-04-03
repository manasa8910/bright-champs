import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import Introduction2 from "./Introduction2";
import Introduction3 from "./Introduction3";
import Instructions from "./Instructions";
import Game from "./Game";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/Introduction2" element={<Introduction2 />} />
          <Route path="/Introduction3" element={<Introduction3 />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <img
          src="/bg.png"
          className="h-screen w-screen object-cover overflow-hidden"
        />
      </Router>
    </>
  );
}

export default App;
