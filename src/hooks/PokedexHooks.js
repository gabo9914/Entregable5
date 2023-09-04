import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons, getAllTypes, getPokemonsType } from "../services/pokemons";

/*logic detach hook, from PokexCard.jsx component*/

const PokedexHooks = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType, setPokemonType] = useState("");
    const [types, setTypes] = useState([])
  
    const { name } = useSelector((store) => store.trainer);
  
    const handleChange = (setState) => (e) => {
      setState(e.target.value);
    };
  
    const pokemonsName = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  
    useEffect(() => {
      if (!pokemonType) {
        getAllPokemons()
          .then((data) => setPokemons(data))
          .catch((err) => console.log(err));
      }
    }, [pokemonType]);
  
    useEffect(() => {
      if (pokemonType) {
        getPokemonsType(pokemonType).then((data) => setPokemons(data));
      }
    }, [pokemonType]);

    useEffect(() => {
      getAllTypes()
      .then((data) => setTypes(data))
      .catch()
    }, []);
    

  return {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsName,
    types,
  }
}
export default PokedexHooks