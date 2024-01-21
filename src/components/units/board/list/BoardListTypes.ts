import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;

  onClickMakePost: () => void;
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickSearch: (event: MouseEvent<HTMLSpanElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
}

export interface IMyVariables {
  id?: string;
}
