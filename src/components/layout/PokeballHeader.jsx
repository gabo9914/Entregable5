import { useDispatch } from "react-redux";
import {  GiExitDoor } from "react-icons/gi"
import { logout } from "../../store/slices/PokemonTrainer.slice";

const PokeballHeader = ({ children }) => {
  const dispatch= useDispatch()

  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <section>
      <div className=" bg-gradient-to-r from-red-500 to-red-800 h-12 relative">
        <div className=" absolute left-0 bottom-0 w-[240px] sm:w-[300px]">
          <a href="/">
            <img src="/images/baner.png" />
          </a>
        </div>
      </div>

      <div className=" bg-black h-6 relative flex  items-center">
        <div className=" h-12 bg-white aspect-square rounded-full absolute right-0 -translate-x-1/4 -top-2/4 sm:right-1/2 sm:translate-x-1/2 border-[4px] border-black after:block after:content-[''] after:h-7 after:aspect-square after:bg-slate-800 after:border-[4px] after:border-black after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2  transition-colors hover:bg-red-600 cursor-pointer ">
        </div>
        <a
          className="bg-grass-txt text-white font-bold font-Montse  rounded-full z-10 top-2 right-2 p-1 px-4"
          href="/PokexCard/"
        >
          <button>⇠ BACK</button>
        </a>
        <div onClick={handleLogout} className=" hover:cursor-pointer text-white absolute right-1/2 translate-x-6 sm:right-3 sm:translate-x-1/2 ">
          <GiExitDoor/>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};
export default PokeballHeader;
