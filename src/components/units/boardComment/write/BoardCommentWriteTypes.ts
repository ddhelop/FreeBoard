import type{ ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteUI {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
}
