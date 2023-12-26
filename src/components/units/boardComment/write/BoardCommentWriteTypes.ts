import type{ ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUI {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue: (value:number) => void;
  value?:number;
  writer : string;
  password: string;
  contents: string;
  el: IBoardComment
  isEdit?: boolean;
  
}


export interface IBoardCommentUpdateUI {
  isEdit?: boolean;
  el: IBoardComment
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}