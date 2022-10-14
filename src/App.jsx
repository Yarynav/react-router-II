import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Pokemones } from './views/Pokemones';
import { PokemonContext } from './context/PokemonContext';
import { Pokemon } from './views/Pokemon';
import { Navbar } from './components/Navbar';

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
          <Navbar />
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
