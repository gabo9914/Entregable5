const BarProgresStat = ({ stat }) => {
  const BarPercentStat = (statValue) => {
    const MAX_VALUE = 255;
    const percent = (100 * statValue) / MAX_VALUE;
    return `${percent}%`;
  };

  return (
    <article className=" flex flex-col items-center px-1">
      <section className=" w-[294px] flex justify-between">
        <h5>{stat.name}</h5>
        <span>{stat.value}/ 255</span>
      </section>
      <div className=" h-6 w-[294px] bg-slate-300 rounded-md">
        <div
          style={{ width: BarPercentStat(stat.value) }}
          className=" h-full bg-gradient-to-r from-yellow-500 to-orange-500"
        ></div>
      </div>
    </article>
  );
};
export default BarProgresStat;
