import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  onClickMakePost: (event: MouseEvent<HTMLImageElement>) => void;
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IMyVariables {
  id?: string;
}
