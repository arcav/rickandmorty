import { useState, useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { AllCharacters } from "./pages/AllCharacters/AllCharacters";
import { UnknownCharacters } from "./pages/UnknownCharacters/UnknownCharacters";
import { SearchCaracters } from "./pages/searchCharacters/SearchCharacters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [filterCharacter, setFilterCharacters] = useState([]);

  const getFilterCharacter = (searchQuery) => {
    setQuery(searchQuery);
    const queryCharacter = characters.filter((f) =>
      f.name.toLowerCase().includes(searchQuery)
    );
    return queryCharacter;
  };

  console.log(filterCharacter);

  let api = `https://rickandmortyapi.com/api/character/?name=${query}`;
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(api);
        const json = await response.json();
        setFilterCharacters(json.results);
        setCharacters(json.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [api]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="characters"
        element={<Layout onSubmit={getFilterCharacter} />}
      >
        <Route path="all" element={<AllCharacters characters={characters} />} />

        <Route
          path=":gender"
          index
          element={<UnknownCharacters characters={characters} />}
        />
        <Route
          path="filterCharacters"
          element={
            <SearchCaracters filterCharacter={filterCharacter} query={query} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
