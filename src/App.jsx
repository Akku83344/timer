import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsLetter";
import { Home } from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<NewsPage />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </>
  );
}

export default App;

