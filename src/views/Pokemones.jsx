import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Pokemones = () => {
  const navigate = useNavigate();
  const {
    pokemons,
    url,
    setUrl,
    setSelectedPokemon,
    setPokemonName,
    pokemonName,
  } = useContext(PokemonContext);

  const getInfo = async () => {
    if (!url) {
      alert('Seleccione un Pokemon');
      return;
    }
    const res = await fetch(url);
    const json = await res.json();
    setSelectedPokemon(json);
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div className="pokemon-view">
      <div className="lista">
        <h1>Selecciona un pokemon</h1>
        {pokemons.length > 0 && (
          <select
            className="select"
            onChange={(e) => {
              setUrl(e.target.value);
              setPokemonName(e.target.selectedOptions[0].text);
            }}
          >
            <option className="opciones" value={''}>
              Seleccionar Pokemon
            </option>
            {pokemons.map((e, i) => (
              <option className="opciones" key={i} value={e.url}>
                {e.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={() => {
            getInfo();
          }}
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
};
