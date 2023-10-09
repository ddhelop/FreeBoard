import type { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  onClickGoHome: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
}
