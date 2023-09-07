import { useEffect, useState } from "react";
import { getPokemonByUrl, pokemonType } from "../../services/pokemons";
import StatsPokemon from "./StatsPokemon";
import { bgPokemonType, borderPokemonType } from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
      <Link
      to={`/PokexCard/${pokemonInfo?.id}`}
      className={`w-[250px] text-center capitalize border-[5px] rounded-md bg-yellow-50 mb-2 ${
        borderPokemonType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgPokemonType[pokemonInfo?.types[0]]
        }`}
      >
        <div className=" absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img
            className=" h-full w-full object-contain"
            src={pokemonInfo?.image}
          />
        </div>
      </header>
      <section className=" flex flex-col flex-wr items-center">
        <h3 className=" text-xl font-bold">{pokemonInfo?.name}</h3>
        <h4>{pokemonType(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatsPokemon stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;

