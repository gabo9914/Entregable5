import { useDispatch } from "react-redux";
import { loginTrainer } from "../store/slices/PokemonTrainer.slice";
import { useNavigate } from "react-router-dom";
import FooterPokeball from "../components/layout/FooterPokeball";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/PokexCard");
  };

  return (
    <main className=" min-h-screen grid justify-center bg-[url(/images/Emerald.gif)] bg-cover bg-center">
      <article className=" flex flex-col justify-between items-center text-2xl text-center sm:bg-slate-300/10">
        <div>
          <img 
          src="/images/baner.png" />
        </div>
        <div>
          <h2 className=" text-4xl font-extrabold">Hello Trainer!</h2>
          <p className=" font-normal text-xl text-red-500">¡To start, give me your name!</p>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className=" w-[230px] border-black border-t-[2px] border-b-[2px] border-l-[2px] outline-none sm:w-[250px] "
              id="nameTrainer"
              placeholder="Enter your name..."
              type="text"
              required
            />
            <button
            className="w-[55px] text-center border-black border-t-[2px] border-r-[2px] border-b-[2px] outline-none bg-red-600" 
            >Start</button>
          </form>
        </div>
        <div></div>
      </article>
    </main>
  );
};
export default Home;
