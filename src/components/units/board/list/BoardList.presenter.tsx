import { getDate } from "../../../../commons/libraries/utils";
import * as L from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardListTypes";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <L.Wrapper>
        <L.ListWrapper>
          <L.Row>
            <L.ColumnHeaderBasic>번호</L.ColumnHeaderBasic>
            <L.ColumnHeaderTitle>제목</L.ColumnHeaderTitle>
            <L.ColumnHeaderBasic>작성자</L.ColumnHeaderBasic>
            <L.ColumnHeaderBasic>날짜</L.ColumnHeaderBasic>
          </L.Row>

          {props.data?.fetchBoards.map((el: any) => (
            <L.Row key={el.number}>
              <L.ColumnBasic>
                {String(el._id).slice(-4).toUpperCase()}
              </L.ColumnBasic>
              <L.ColumnTitle id={el._id} onClick={props.onClickRow}>
                {el.title}
              </L.ColumnTitle>
              <L.ColumnBasic>{el.writer}</L.ColumnBasic>
              <L.ColumnBasic>{getDate(el.createdAt)}</L.ColumnBasic>
            </L.Row>
          ))}
        </L.ListWrapper>

        <L.Footer>
          <L.PageNumberDiv>
            <L.Number>하나</L.Number>
            <L.Number>둘</L.Number>
          </L.PageNumberDiv>

          <L.MakePageBtn
            src="./list/makePage.png"
            onClick={props.onClickMakePost}
          ></L.MakePageBtn>
        </L.Footer>
      </L.Wrapper>
    </>
  );
}
