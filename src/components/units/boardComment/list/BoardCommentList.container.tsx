import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.query";
import { useRouter } from "next/router";
import { useState, type MouseEvent } from "react";
import type {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListManage from "./BoardCommentList.presenterManage";

export default function BoardCommentList() {
  const router = useRouter();

  const { data,fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId as string,
    },
  });


  return (
    <BoardCommentListManage
      data={data}
    />
  );
}
