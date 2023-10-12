import { useState } from "react";
import type { ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";
import type { IBoardWriteProps, IMyVariable } from "./BoardWriteTypes";

export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("* 이름을 입력해주세요.");
    }
    if (!password) {
      setPasswordError("* 비밀번호를 입력해주세요");
    }
    if (!title) {
      setTitleError("* 제목을 입력해주세요");
    }
    if (!contents) {
      setContentError("* 내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            title,
            contents,
            password,
            boardAddress:{
              zipCode,
              address,
            }
          },
        },
      });
      alert("게시글 등록이 완료되었습니다.");
      console.log(result.data.createBoard._id);
      await router.push(`/boards/${result.data?.createBoard._id}`);
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정할 내용이 없습니다.");
      return;
    }

    const updateBoardInput: IMyVariable = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      alert("게시글 수정이 완료되었습니다.");
      await router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  
  const [zipCode, setZipCode] = useState("");
  const [address,setAddress] = useState("")
  const handleComplete = (data: any) => {
    setAddress(data.address);
    setZipCode(data.zonecode);
    setIsOpen(false);
  }
  
const onClickToggle = () =>{
  setIsOpen((prev) => !prev )
}


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
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      data={props.data}
      onClickUpdate={onClickUpdate}
      onClickToggle={onClickToggle}
      address={address}
      zipCode={zipCode}
      handleComplete={handleComplete}
    />
  );
}
