import "./App.css";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
