<section className=" w-[315px] mt-5 mr-[3px] mb-5 ml-[2px] flex flex-col border-[3px] border-black items-center sm: w-[500p]x">
<header className=" flex flex-col items-center mt-5">
  <div>
    <img src={pokemonData?.image} />
  </div>
</header>
<section className="">
  <span>#{pokemonData?.id}</span>
  <span>{pokemonData?.name}</span>
  <section className=" grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] overflow-hidden gap-2">
  <div>
    <StatBarList stats={pokemonData?.stats} />
  </div>
  <div>
    <div>

    </div>
  </div>
  <div>
  <button className=" place-self-center ml-2 font-bold font-Montse cursor-pointer">Moves</button>
  <div className=" h-[400px] overflow-y-scroll">
    <MovesPokemon moves={pokemonData?.moves}/>
  </div>
  </div>
  </section>
</section>
</section>