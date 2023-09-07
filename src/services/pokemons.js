import axios from "axios";

export const getAllPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(url);
  return data.results;
};

export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonsType = async (pokemonType) => {
  const URL = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(URL);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonId = async (pokemonId) => {
  const urlP = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(urlP);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStat(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
    moves: data.moves,
  };

  return pokemon;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStat(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };
  return pokemon;
};
const formatStat = (stats) => {
  return stats?.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};

const formatTypes = (types) => {
  return types?.map((type) => type.type.name);
};

export const pokemonType = (types = []) => {
  return types.slice(0, 2).join(" / ");
};
