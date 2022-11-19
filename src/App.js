import { Route, Routes, BrowserRouter, O, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AllCharacters } from "./pages/AllCharacters/AllCharacters";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/allCharacters" element={<AllCharacters />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
