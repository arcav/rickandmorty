import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AllCharacters } from "../pages/AllCharacters/AllCharacters";
import { UnknownCharacters } from "../pages/UnknownCharacters/UnknownCharacters";
import { Home } from "../pages/Home/Home";

export const Paths = ( {characters, unknown} ) => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/allCharacters"
      element={<AllCharacters characters={characters} />}
    />
    <Route
      path="/unknownCharacters"
      element={<UnknownCharacters unknown={unknown} />}
    />
  </Routes>;
};
