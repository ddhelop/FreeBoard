
import BoardCommentListUI from "./BoardCommentList.presenter";
import {IBoardCommentListUIProps } from "./BoardCommentListTypes";

export default function BoardCommentListManage(props: IBoardCommentListUIProps):JSX.Element {

  return (
    <div>
      {props.data?.fetchBoardComments.map((el:any) => (
        <BoardCommentListUI key={el._id} el={el} />
      )) ?? <></> }
    </div>
  )
}
