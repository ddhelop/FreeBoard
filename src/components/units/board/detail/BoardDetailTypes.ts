import type { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  onClickGoHome: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickLike: (event:MouseEvent<HTMLImageElement>) => void;
  onClickDisLike: (event:MouseEvent<HTMLImageElement>) => void;
  showModal: (event:MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  open: boolean;
}
