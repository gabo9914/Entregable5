import { BiRewind, BiFastForward } from "react-icons/bi";
import { AiOutlineFastBackward, AiOutlineFastForward } from "react-icons/ai";
const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };
  const handlePreviusPage = () => {
    setCurrentPage((prevState) => {
      const firstPage = 1;
      const previusPage = prevState - 1;
      if (previusPage > firstPage) return previusPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);
  const handleFirstPage = () => setCurrentPage(1);

  return (
    <ul className=" h-20 flex justify-center items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-300">
      {currentPage >= 2 && (
         <li onClick={handleFirstPage} className="cursor-pointer">
          <AiOutlineFastBackward />
        </li>
      )}
      {currentPage >= 2 && (
        <li onClick={handlePreviusPage} className="cursor-pointer">
          <BiRewind />
        </li>
      )}
      {pagesInCurrentBlock?.map((page) => (
        <li
          className={`  w-[18px] h-[18px] p-2 flex justify-center items-center border-[1px] border-black ${
            currentPage === page ? "bg-black/90 text-white" : ""
          } hover:cursor-pointer`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && (
        <li onClick={handleNextPage} className="cursor-pointer">
          <BiFastForward />
        </li>
      )}
      {currentPage < lastPage && (
        <li className="cursor-pointer" onClick={handleLastPage}>
          <AiOutlineFastForward />
        </li>
      )}
    </ul>
  );
};
export default Pagination;
