import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.query";

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  }

  function onChangeContent(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
  }

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("* 이름을 입력해주세요.");
      console.log(writerError);
    }
    if (!password) {
      setPasswordError("* 비밀번호를 입력해주세요");
      console.log(passwordError);
    }
    if (!title) {
      setTitleError("* 제목을 입력해주세요");
      console.log(titleError);
    }
    if (!contents) {
      setContentError("* 내용을 입력해주세요.");
      console.log(contentError);
    }
    if (writer && password && title && contents) {
      await createBoard({
        variables: {
          createBoardInput: {
            writer,
            title,
            contents,
            password,
          },
        },
      });
      alert("회원가입이 완료되었습니다.");
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentsError}
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
    />
  );
}
