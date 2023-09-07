import { useState } from "react";
import PokemonList from "../components/PokexCard/PokemonList";
import PokedexHooks from "../hooks/PokedexHooks";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/PokexCard/Pagination";

const PokexCard = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonsName,
    setPokemonName,
    setPokemonType,
    types,
  } = PokedexHooks();

  const {itemsCurrentPage, lastPage, pagesInCurrentBlock, bgColor}= paginateData(pokemonsName, currentPage)

  return (
    <main className=" min-h-screen  bg-gradient-to-r from-gray-100 to-gray-300">
      <section>
        <div className=" h-[20px]"></div>
        <p className=" flex flex-col flex-wrap items-center text-center font-medium ml-[2.5px] mr-[2.5px]">
          <span className=" text-red-600 font-extrabold">Welcome {name}</span>{" "}
          Here you can find your favorite pokemon.
        </p>
        <form className=" flex flex-wrap justify-center sm:justify-between gap-1 mt-3 mb-5 mr-7 ml-7">
          <div>
            <input
              className=" w-[180px] capitalize rounded-md border-[2px] border-black text-center"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search Pokemon"
              type="text"
            />
          </div>

          <select
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
            className=" capitalize rounded-md border-[1px] border-black"
          >
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
        </form>
      </section>
      <PokemonList pokemons={itemsCurrentPage} />
      <Pagination 
      lastPage={lastPage}
      pagesInCurrentBlock={pagesInCurrentBlock}
      setCurrentPage={setCurrentPage}
      bgColor={bgColor}
      currentPage={currentPage}/>
    </main>
  );
};
export default PokexCard;
