import { MouseEvent, MouseEventHandler, useState } from "react"
import * as P from "./Pagination.style"
import { IPaginationProps } from "./PaginationTypes";

export default function PaginationComponent(props:IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);
  const [activePage, setActivePage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({page: activePage})
  }
  const onClickPrevPage = (event:MouseEvent<HTMLDivElement>) => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({page: startPage - 10})
  }
  const onClickNextPage = (event: MouseEvent<HTMLDivElement>) => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10)
      void props.refetch({page:startPage+10})
    }
  }

  return (
    <>
      <P.PageNumberContainer>
        <P.PageNumber onClick={onClickPrevPage}>&lt;</P.PageNumber>
      {new Array(10).fill(1).map(
        (_, index) =>
          <P.PageNumber
            key={index + startPage}
            id={String(index+startPage)}
            onClick={onClickPage}
            isActive={startPage + index === activePage}
          >
            {index + startPage}  
          </P.PageNumber>
        )} 
        <P.PageNumber onClick={onClickNextPage}>&gt;</P.PageNumber>
        </P.PageNumberContainer>
    </>
  )
}
