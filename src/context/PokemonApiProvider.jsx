import { createContext, useState, useEffect } from 'react';

export const PokemonApiContext = createContext();

export const PokemonApiProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const showError = (error) => {
    console.log(error);
    alert('Ha ocurrido un error, intente más tarde');
  };

  const getPokemons = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const json = await res.json();
      setPokemons(json.results);
    } catch (e) {
      showError(e);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonApiContext.Provider
      value={{
        pokemons,
        setPokemons,
        url,
        setUrl,
        selectedPokemon,
        setSelectedPokemon,
        pokemonName,
        setPokemonName,
        showError,
      }}
    >
      {children}
    </PokemonApiContext.Provider>
  );
};
