import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.query";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const onClickMakePost = () => {
    router.push("../../../../boards/new");
  };

  const onClickRow = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/${event.target.id}`);
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <BoardListUI
      data={data}
      onClickMakePost={onClickMakePost}
      onClickRow={onClickRow}
    />
  );
}
