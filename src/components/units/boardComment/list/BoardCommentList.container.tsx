import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.query";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
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

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      if (event.target instanceof HTMLInputElement) {
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

  console.log(data?.fetchBoardComments);

  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
