import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Pokemon = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  // pasarle parametros por url
  const { name } = useParams();
  // redirigir desde el codigo sin usar el componente Link
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPokemon === null) {
      navigate('/pokemones');
    }
  }, []);

  return (
    <div className="pokemon-view">
      {selectedPokemon !== null && (
        <div className="pokemon-card">
          <img
            src={
              selectedPokemon.sprites.other['official-artwork'].front_default
            }
          />
          <div className="pokemon-info-list">
            <h2 className="pokemon-name">{name}</h2>
            <ul>
              {selectedPokemon.stats.map((e, i) => (
                <li key={e.stat.name + i}>
                  {e.stat.name}: {e.base_stat}
                </li>
              ))}
            </ul>

            <div className="pokemon-types-container">
              {selectedPokemon.types.map((e) => (
                <div className="pokemon-type" key={e.type.name}>
                  {e.type.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
