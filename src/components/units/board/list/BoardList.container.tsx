import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.query";
import { useRouter } from "next/router";
import { ChangeEvent, useState, type MouseEvent} from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList():JSX.Element {
  const router = useRouter();

  const onClickMakePost = async ():Promise<void> => {
    await router.push("../../../../boards/new");
  };
  const onClickRow = async (event: MouseEvent<HTMLDivElement>):Promise<void> => {
    if (event.target instanceof HTMLDivElement)
      await router.push(`/boards/${event.target.id}`);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id)
    void refetch({ page: Number(event?.currentTarget.id) });
  }

  // ///////// About Search
  const [search, setSearch] = useState("")

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value)
  }

  const onClickSearch = (event: MouseEvent<HTMLSpanElement>):void => {
    void refetch({
      search,
      page: 1
    })
  }
  // ////////////
  
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // About Pagination
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);
    
  
  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      count = {dataBoardsCount?.fetchBoardsCount}
      onClickMakePost={onClickMakePost}
      onClickRow={onClickRow}
      onClickPage={onClickPage}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      dataBoardsCount = {dataBoardsCount}
    />
  );
}
