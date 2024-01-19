import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import styled from "@emotion/styled";

export default function BoardDetailPage():JSX.Element {
  const Align = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
  `


  

  return (
    <>
      <Align>
        <BoardDetail />
        <BoardCommentWrite />
        <BoardCommentList />
      </Align>
    </>
  );
}
