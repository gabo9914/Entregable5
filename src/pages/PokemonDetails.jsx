import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../services/pokemons";
import StatBarList from "../pokemonDetails/StatBarList";
import Skills from "../pokemonDetails/Skills";
import { bgPokemonType, borderPokemonType } from "../shared/pokemon";

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonId(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" min-h-screen bg-[url(/images/bgDetails.gif)] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden">
      <section className=" ">
        <section
          className={`w-[310px] flex flex-col justify-center items-center text-center capitalize rounded-md bg-yellow-50 mt-5 mb-2 ${
            borderPokemonType[pokemonData?.types[0]]
          }`}
        >
          <header
            className={`w-[304px] flex flex-col items-center ${
              bgPokemonType[pokemonData?.types[0]]
            }`}
          >
            <div>
              <img src={pokemonData?.image} />
            </div>
          </header>
          <section className=" flex flex-col items-center">
            <span key={pokemonData?.name}>{pokemonData?.name}</span>
            <span key={pokemonData?.name}>#{pokemonData?.id}</span>
            <span></span>
            <section className="">
              <div className=" flex justify-center gap-5">
                <div>
                  <h2 className=" text-center text-lg font-bold">Types</h2>
                  <div className=" flex gap-3">
                    <span className=" border-[1px] font-semibold border-black rounded-md text-center">
                      {pokemonData?.types[0]}
                    </span>
                    <span className=" border-[1px] font-semibold border-black rounded-md text-center">
                      {pokemonData?.types[1]}
                    </span>
                  </div>
                </div>
                <div>
                  <Skills abilities={pokemonData?.abilities} />
                </div>
              </div>
              <div className=" mb-2">
                <StatBarList stats={pokemonData?.stats} />
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};
export default PokemonDetails;
