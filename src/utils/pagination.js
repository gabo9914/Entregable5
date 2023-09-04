const paginateData = (items, currentPage) => {
  const ITEMS_PER_PAGE = 20;
  const sliceEnd = currentPage * ITEMS_PER_PAGE;
  const sliceStart = sliceEnd - ITEMS_PER_PAGE;
  const itemsCurrentPage = items.slice(sliceStart, sliceEnd)
  const lastPage= Math.ceil(items.length/ITEMS_PER_PAGE)
  const PAGES_PER_BLOCK = 5
  const actualBlock= Math.ceil(currentPage/PAGES_PER_BLOCK)
  const pagesInCurrentBlock = []
  const maxPage = actualBlock * PAGES_PER_BLOCK
  const minPage= (maxPage - PAGES_PER_BLOCK) + 1
  
  for(let i = minPage; i<=maxPage; i++){
    if(i<=lastPage){pagesInCurrentBlock.push(i)
  }
}
const bgColor={
  color: "black"
}
return{
    itemsCurrentPage,
    lastPage,
    pagesInCurrentBlock,
    bgColor
}
}
export { paginateData };
