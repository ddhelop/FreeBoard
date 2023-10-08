import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMakePost: (event: MouseEvent<HTMLImageElement>) => void;
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IMyVariables {
  id?: string;
}
