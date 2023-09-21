import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.query";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../list/BoardList.query";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDeleteBoard = () => {
    deleteBoard({
      variables: {
        boardId: router.query.boardId,
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
