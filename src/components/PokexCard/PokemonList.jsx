import PokemonCard from "./PokemonCard";
const PokemonList = ({ pokemons }) => {
  return (
    <section className=" grid px-4 gap-5 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] place-items-center bg-gradient-to-r from-gray-100 to-gray-300">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
