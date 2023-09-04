const PokeballHeader = ({ children }) => {
  return (
    <section>
      <div className=" bg-gradient-to-r from-red-500 to-red-800 h-12 relative">
        <div className=" absolute left-0 bottom-0 w-[240px] sm:w-[300px]">
          <a href="/">
            <img src="/images/baner.png" />
          </a>
        </div>
      </div>

      <div className=" bg-black h-6 relative">
        <div className=" h-12 bg-white aspect-square rounded-full absolute right-0 -translate-x-1/4 -top-2/4 border-[4px] border-black after:block after:content-[''] after:h-7 after:aspect-square after:bg-slate-800 after:border-[4px] after:border-black after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 "></div>
      </div>
      <div>{children}</div>
    </section>
  );
};
export default PokeballHeader;
