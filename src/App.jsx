import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import Page404 from "./pages/Page404";
import PrivateRoute from "./components/auth/PrivateRoute";
import PokexCard from "./pages/PokexCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoute />}>
        <Route path="/PokexCard" element={<PokexCard />} />
        <Route path="/PokexCard/:pokemonId" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
