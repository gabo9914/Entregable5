const StatsPokemon = ({stats}) => {
  return (
    <ul className=" grid grid-cols-3 gap-2 text-lg p-2 border-t-[1px] border-black ">
        {
            stats?.map((stat)=><li key={stat.name}> 
                <h4 className=" capitalize line-clamp-1">{stat.name}</h4>
                <span className=" font-bold">{stat.value}</span>
            </li>)
        }
    </ul>
  )
}
export default StatsPokemon