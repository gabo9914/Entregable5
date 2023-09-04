const MovesPokemon = ({moves}) => {
  return (
    <section>
      {moves?.map((move) => (
        <li className="flex" key={move.name}>
          <span className=" capitalize line-clamp-1">{move.name}</span>
        </li>
      ))}
    </section>
  );
};
export default MovesPokemon;
