import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.query";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../list/BoardList.query";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId as string },
    }
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDeleteBoard = () => {
    deleteBoard({
      variables: {
        boardId: router.query.boardId as string,
      },
    });
    alert("게시글이 삭제되었습니다.");
    router.push("../../../../boards");
  };

  const onClickUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickGoHome = () => {
    router.push(`/boards`);
  };

  return (
    <BoardDetailUI
      onClickGoHome={onClickGoHome}
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickUpdate={onClickUpdate}
    />
  );
}
