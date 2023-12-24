import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.query";
import { useRouter } from "next/router";
import type{ ChangeEvent } from "react";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.query";
import { IBoardCommentUpdateUI } from "./BoardCommentWriteTypes";

export default function BoardCommentWrite(props:IBoardCommentUpdateUI) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const router = useRouter();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onChangeValue = (value:number) => {
    setValue(value);
  }

  const onClickSubmit = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: writer,
            password,
            contents,
            rating: value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
    alert("댓글이 등록되었습니다.");
    
    setWriter("");
    setPassword("");
    setContents("");
  };

  const onClickUpdate = async () => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: router.query.boardId,
          password,
          updateBoardCommentInput: {
            contents,
            rating: value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId }
          }
        ]
      })
    } catch (error:any) {
      alert(error.message)
    }
  }


  return (
    <BoardCommentWriteUI
      isEdit={props.isEdit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangePassword={onChangePassword}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeValue={onChangeValue}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
