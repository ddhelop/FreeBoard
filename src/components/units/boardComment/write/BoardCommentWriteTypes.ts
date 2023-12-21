import type{ ChangeEvent, MouseEvent } from "react";

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
  
  isEdit?: boolean;
  
}


export interface IBoardCommentUpdateUI {
  isEdit?: boolean;
}