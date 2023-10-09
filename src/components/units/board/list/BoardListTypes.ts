import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMakePost: (event: MouseEvent<HTMLImageElement>) => void;
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IMyVariables {
  id?: string;
}
