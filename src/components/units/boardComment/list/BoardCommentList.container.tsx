import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.query";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] =
    useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId as string,
    },
  });

  const onClickDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      if(event.target instanceof HTMLImageElement){
        const myPassword = prompt("비밀번호를 입력하세요.");
        await deleteBoardComment({
          variables: {
            password: myPassword,
            boardCommentId: event.target.id,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        alert("댓글이 삭제되었습니다.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
