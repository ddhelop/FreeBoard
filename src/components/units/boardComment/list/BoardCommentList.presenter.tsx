import { useMutation } from "@apollo/client";
import * as L from "./BoardCommentList.styles";
import type { IBoardCommentListManageUIProps } from "./BoardCommentListTypes";
import { IMutation } from "../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.query";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUI(props: IBoardCommentListManageUIProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] =
    useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_BOARD_COMMENT);
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
  
  const onClickCommentUpdate = () => {
    setIsEdit(true);
  }

  return (
    <div>
      { !isEdit ? (
        <L.Wrapper>
          <L.CommentDiv>
            <L.UserIcon src="/commentList/UserIcon.png" />
            <L.CommentTextDiv>
              <L.RateDiv>
                <L.UserName>{props.el.writer}</L.UserName>
                <L.ShowRate disabled value={props.el.rating} />
              </L.RateDiv>
              <L.CommentText>{props.el.contents}</L.CommentText>
              <L.CommentDay>{props.el.createdAt}</L.CommentDay>
            </L.CommentTextDiv>
            <L.BtnDiv>
              <L.Icon onClick={onClickCommentUpdate} src="/commentList/UpdateIcon.png" />
              <L.Icon
                src="/commentList/DeleteIcon.png"
                id={props.el._id}
                onClick={onClickDeleteComment}
              />
            </L.BtnDiv>
          </L.CommentDiv>
        </L.Wrapper>

      ) : <BoardCommentWrite isEdit={isEdit} el={props.el} setIsEdit={setIsEdit} />
      }  
    </div>
      
  );
}
