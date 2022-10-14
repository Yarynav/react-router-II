import { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const Home = () => {
  const { setPokemons } = useContext(PokemonContext);

  /** @description Obtiene el listado inical de Pokemones desde el api */
  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
    const json = await res.json();
    setPokemons(json.results);
  };

  /**@description cuando se carga el componente llamamos al api de pokemon para mostrar el listado */
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="Home-views">
      <div className="fondo">
        <h1>Bienvenido Maestro Pokemon</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" />
      </div>
    </div>
  );
};
