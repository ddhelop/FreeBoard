import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.query";
import { useRouter } from "next/router";
import type{
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

  const onClickDeleteBoard = async() => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId as string,
      },
    });
    alert("게시글이 삭제되었습니다.");
    await router.push("../../../../boards");
  };

  const onClickUpdate = async () => {
    if (router.query.boardId) {
      const boardId = Array.isArray(router.query.boardId)
        ? router.query.boardId[0]
        : router.query.boardId;
      await router.push(`/boards/${boardId}/edit`);
    } else {
      // router.query.boardId가 undefined인 경우 처리할 로직을 여기에 추가하세요.
    }
  };
  const onClickGoHome = async () => {
    await router.push(`/boards`);
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
