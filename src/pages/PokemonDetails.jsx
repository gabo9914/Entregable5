import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../services/pokemons";
import StatBarList from "../pokemonDetails/StatBarList";
import MovesPokemon from "../pokemonDetails/MovesPokemon";

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonId(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" min-h-screen bg-[url(/images/bgDetails.gif)] bg-cover bg-center">
      <article className=" min-h-screen flex flex-col justify-center items-center gap-2">
        <section className=" w-[280px] flex flex-col border-[3px] border-black items-center sm: w-[500p]x">
          <header className=" flex flex-col items-center mt-5">
            <div>
              <img src={pokemonData?.image} />
            </div>
          </header>
          <section className=" mb-5">
            <span>#{pokemonData?.id}</span>
            <StatBarList stats={pokemonData?.stats} />
          </section>
        </section>
      </article>
    </main>
  );
};
export default PokemonDetails;
