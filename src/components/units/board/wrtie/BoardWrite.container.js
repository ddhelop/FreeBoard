import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

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

  function onClickSubmit() {
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
    if (!content) {
      setContentError("* 내용을 입력해주세요.");
      console.log(contentError);
    }
    if (writer && password && title && content) {
      alert("회원가입이 완료되었습니다.");
    }
  }

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
    />
  );
}
