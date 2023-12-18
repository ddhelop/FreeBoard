import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMakePost: (event: MouseEvent<HTMLImageElement>) => void;
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLSpanElement>) => void;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  startPage?: number;
  lastPage?: number;
}

export interface IMyVariables {
  id?: string;
}
