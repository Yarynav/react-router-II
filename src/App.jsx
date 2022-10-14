import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Pokemones } from './views/Pokemones';
import { PokemonContext } from './context/PokemonContext';
import { Pokemon } from './views/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const json = await res.json();
    setPokemons(json.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app">
      <PokemonContext.Provider
        value={{
          pokemons,
          setPokemons,
          url,
          setUrl,
          selectedPokemon,
          setSelectedPokemon,
          pokemonName,
          setPokemonName,
        }}
      >
        <BrowserRouter>
          <nav className="barra">
            <NavLink
              end
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
            <NavLink
              end
              to="/pokemones"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Pokemones
            </NavLink>
          </nav>

          <Routes>
            <Route path="pokemones" element={<Pokemones />} />
            <Route path="pokemon/:name" element={<Pokemon />} />
            <Route path="/" exac element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
