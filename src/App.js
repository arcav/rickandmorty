import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import {AllCharacters} from "./pages/AllCharacters/AllCharacters";
import { UnknownCharacters } from "./pages/UnknownCharacters/UnknownCharacters";
import { FemaleCharacters } from "./pages/FemaleCharacters/FemaleCharacters";
import { MaleCharacters } from "./pages/MaleCharacters/MaleCharacters";
import { Genderless } from "./pages/Genderless/Genderless";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allCharacters" element={<AllCharacters />} />
          <Route path="/unknownCharacters" element={<UnknownCharacters />} />
          <Route path="/femaleCharacters" element={<FemaleCharacters />} />
          <Route path="/maleCharacters" element={<MaleCharacters />} />
          <Route path="/genderlessCharacters" element={<Genderless />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
