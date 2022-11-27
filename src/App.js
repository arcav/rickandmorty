import { useState, useEffect } from "react";
import { Home } from "./pages/Home/Home";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { AllCharacters } from "./pages/AllCharacters/AllCharacters";
import { UnknownCharacters } from "./pages/UnknownCharacters/UnknownCharacters";
import { FemaleCharacters } from "./pages/FemaleCharacters/FemaleCharacters";
import { MaleCharacters } from "./pages/MaleCharacters/MaleCharacters";
import { GenderlessCharacters } from "./pages/Genderless/Genderless";

const URI = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(URI);
      const json = await response.json();
      setCharacters(json.results);
    }
    getData();
  }, []);

  //Funcion Filtrado
  /*
   const filterCharacters = (path) => {
    const filterPath = path.filter((path) => path.gender === path);
    return filterPath;
  }; */

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="characters" element={<Layout />}>
        <Route index element={<AllCharacters characters={characters} />} />
        <Route path="all" element={<AllCharacters characters={characters} />} />
        <Route
          path=":gender"
          element={<UnknownCharacters characters={characters} />}
        />
      </Route>
    </Routes>
  );
}

export default App;

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route
  element={
    <Layout>
      <Outlet />
    </Layout>
  }
>
  <Route
    path="/characters"
    element={<AllCharacters characters={characters} />}
  >
    <Route
      path="/characters/all"
      element={<AllCharacters />}
      characters={characters}
    />

    <Route
      path="/characters/unknown"
      element={<UnknownCharacters />}
      characters={characters}
    />
     <Route
      path="/characters/female"
      element={<UnknownCharacters />}
      characters={characters}
    />
     <Route
      path="/characters/male"
      element={<UnknownCharacters />}
      characters={characters}
    />
     <Route
      path="/characters/genderless"
      element={<UnknownCharacters />}
      characters={characters}
    />
  </Route>
</Route>
</Routes> */
}
