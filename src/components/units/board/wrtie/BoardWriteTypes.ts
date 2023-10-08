import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
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
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteStylesProps {
  isActive: boolean;
}
