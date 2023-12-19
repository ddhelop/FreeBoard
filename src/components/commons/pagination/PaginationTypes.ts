import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types";

export interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  
  count?: number;
}