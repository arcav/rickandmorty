import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AllCharacters } from "./pages/AllCharacters/AllCharacters";
import { UnknownCharacters } from "./pages/UnknownCharacters/UnknownCharacters";

const URI = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URI);
      const json = await response.json();
      setCharacters(json.results);
    }
    getData();
  }, []);


  //Funcion Filtrado

  const unknown = characters.filter((x) => x.gender === "unknown");
  console.log(unknown);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/allCharacters"
            element={<AllCharacters characters={characters} />}
          />
          <Route
            path="/unknownCharacters"
            element={<UnknownCharacters characters={unknown} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
