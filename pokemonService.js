const { default: axios } = require('axios');

async function getPokemon(pokemonId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const { data } = await axios.get(apiUrl);

  return data;
}

module.exports = getPokemon;
