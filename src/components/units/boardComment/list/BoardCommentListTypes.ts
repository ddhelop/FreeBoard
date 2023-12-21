import type { MouseEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: any;
}

export interface IBoardCommentListManageUIProps{
  el: IBoardComment;
}
