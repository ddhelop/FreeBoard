import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";
import type { IBoardWriteProps, IMyVariable, IBoardAddress } from "./BoardWriteTypes";

export default function BoardWrite(props: IBoardWriteProps):JSX.Element {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [address,setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentError] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);


  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>):void {
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

  function onChangePassword(event: ChangeEvent<HTMLInputElement>):void {
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

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>):void {
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

  function onChangeContent(event: ChangeEvent<HTMLInputElement>):void {
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

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>):void => {
    setAddressDetail(event.target.value);
  }

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>):void => {
    setYoutubeUrl(event.currentTarget.value);
  }

  const onClickSubmit = async ():Promise<void> => {
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
            youtubeUrl,
            images: [...fileUrls],
            boardAddress:{
              zipcode,
              address,
              addressDetail,
            },
            
          },
        },
      });
      alert("게시글 등록이 완료되었습니다.");
      console.log(result.data.createBoard._id);
      await router.push(`/boards/${result.data?.createBoard._id}`);
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    
    if (!title && !contents) {
      alert("수정할 내용이 없습니다.");
      console.log("111")
      return;
    }

    const updateBoardInput: IMyVariable = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if(youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if(zipcode || address || addressDetail){
      updateBoardInput.boardAddress = {} as IBoardAddress;
      if(zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if(address) updateBoardInput.boardAddress.address = address;
      if(addressDetail) updateBoardInput.boardAddress.addressDetail = addressDetail
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;
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
  
  const handleComplete = (data: any):void => {
    setAddress(data.address);
    setZipCode(data.zonecode);
    setIsOpen(false);
  }
  
const onClickToggle = ():void =>{
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
      onChangeYoutubeUrl={onChangeYoutubeUrl}

      onChangeAddressDetail={onChangeAddressDetail}
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      data={props.data}
      onClickUpdate={onClickUpdate}
      onClickToggle={onClickToggle}
      address={address}
      zipcode={zipcode}
      handleComplete={handleComplete}

      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}

    />
  );
}
