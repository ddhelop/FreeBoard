import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen?:boolean;
}

export interface IMyVariable {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: IBoardAddress;
}
export interface IBoardAddress{
  address: string;
  addressDetail: string;
  zipcode : string;
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
  onChangeAddressDetail : (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl : (event: ChangeEvent<HTMLInputElement>) => void;


  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickToggle: (event:MouseEvent<HTMLButtonElement>) => void;
  handleComplete : (adr:any) => void;
  isActive: boolean;
  isEdit: boolean;
  isOpen?:boolean;
  data?: Pick<IQuery, "fetchBoard">;
  address: string;
  zipcode: string;
  
}
