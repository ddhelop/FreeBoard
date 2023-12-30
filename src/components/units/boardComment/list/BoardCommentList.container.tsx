import { useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.query";
import { useRouter } from "next/router";

import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListManage from "./BoardCommentList.presenterManage";

export default function BoardCommentList():JSX.Element {
  const router = useRouter();

  const { data } = useQuery<
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
