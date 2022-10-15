import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Pokemones } from './views/Pokemones';
import {
  PokemonApiContext,
  PokemonApiProvider,
} from './context/PokemonApiProvider';
import { Pokemon } from './views/Pokemon';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="app">
      <PokemonApiProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="pokemones" element={<Pokemones />} />
            <Route path="pokemon/:name" element={<Pokemon />} />
            <Route path="/" exac element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PokemonApiProvider>
    </div>
  );
}

export default App;
