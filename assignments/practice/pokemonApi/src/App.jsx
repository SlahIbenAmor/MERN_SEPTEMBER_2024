import { useState } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results);
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;