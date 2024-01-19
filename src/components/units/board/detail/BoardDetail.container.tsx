import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.query";
import { useRouter } from "next/router";
import { useState } from "react";
import type{
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function wBoardDetail():JSX.Element {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId as string },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
    >(LIKE_BOARD);

    const onClickLike = async ():Promise<void> => { 
      await likeBoard({
        variables: {
          boardId: router.query.boardId as string,
        },
        refetchQueries : [
          {
            query: FETCH_BOARD,
            variables: {boardId : router.query.boardId},
          },
        ],
      });
      
    }

    const [dislikeBoard] = useMutation<
      Pick<IMutation, "dislikeBoard">,
      IMutationDislikeBoardArgs
      >(DISLIKE_BOARD);

    const onClickDisLike = async ():Promise<void> => {
      console.log(data);
      await dislikeBoard({
        variables: {
          boardId: router.query.boardId as string,
        },
        refetchQueries: [
          {
            query:FETCH_BOARD,
            variables: {boardId : router.query.boardId},
          },
        ],
      });
    }

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);


  const onClickDeleteBoard = async():Promise<void> => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId as string,
      },
    });
    await router.push("../../../../boards");
  };

  const showModal = ():void => {
    setOpen((prev) => !prev);
    
  }
  

  const onClickUpdate = async () : Promise<void>=> {
    if (router.query.boardId) {
      const boardId = Array.isArray(router.query.boardId)
        ? router.query.boardId[0]
        : router.query.boardId;
      await router.push(`/boards/${boardId}/edit`);
    } else {
      // router.query.boardId가 undefined인 경우 처리할 로직을 여기에 추가하세요.
    }
  };
  const onClickGoHome = async ():Promise<void> => {
    await router.push(`/boards`);
  };
  

  return (
    <BoardDetailUI
      onClickGoHome={onClickGoHome}
      data={data}
      open={open}
      showModal = {showModal}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickUpdate={onClickUpdate}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
