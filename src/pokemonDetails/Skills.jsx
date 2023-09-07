import SkillsPokemons from "./SkillsPokemons";

const Skills = ({ abilities }) => {
  return (
    <div className=" flex flex-col">
      <h2 className=" font-bold text-lg">Skills</h2>
      <span className=" flex gap-3">
        {" "}
        {abilities?.map((ability) => (
          <SkillsPokemons key={ability.name} ability={ability.ability} />
        ))}
      </span>
    </div>
  );
};
export default Skills;
