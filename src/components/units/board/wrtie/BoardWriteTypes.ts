import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariable {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteStylesProps {
  isEdit: boolean;
  isActive: boolean;
}
