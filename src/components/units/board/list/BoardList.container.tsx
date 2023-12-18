import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.query";
import { useRouter } from "next/router";
import { type MouseEvent, MouseEventHandler, useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);

  const onClickMakePost = async () => {
    await router.push("../../../../boards/new");
  };

  const onClickRow = async (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      await router.push(`/boards/${event.target.id}`);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id)
    void refetch({ page: Number(event?.currentTarget.id) });
  }
  const onClickPrevPage = (event: MouseEvent<HTMLSpanElement>): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
  }
  const onClickNextPage = (evnet: MouseEvent<HTMLSpanElement>): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage - 10 });
    }
  }

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);
    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  
  return (
    <BoardListUI
      data={data}
      dataBoardsCount={dataBoardsCount}
      onClickMakePost={onClickMakePost}
      onClickRow={onClickRow}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}

    />
  );
}
