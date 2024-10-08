import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results);
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Pokémon API with Axios</h1>
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