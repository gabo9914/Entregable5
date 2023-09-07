import BarProgresStat from "./BarProgresStat";

const StatBarList = ({ stats }) => {
  return (
    <section>
      <button className=" place-self-center mr-2 font-bold font-Montse cursor-pointer">
        Stats
      </button>
      <section>
        {stats?.map((stat) => (
          <BarProgresStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;
