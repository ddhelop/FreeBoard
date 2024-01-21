import { getDate } from "../../../../commons/libraries/utils";
import * as L from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardListTypes";
import PaginationComponent from "../../../commons/pagination/Pagination";

export default function BoardListUI(props: IBoardListUIProps):JSX.Element {
  
  return (
    <>
      <L.Wrapper>
        <L.SearchDiv>
          <L.SearchInput type="text" placeholder="🔎  제목을 검색해주세요." onChange={props.onChangeSearch} />
          <L.SearchDayInput></L.SearchDayInput>
          <L.SearchButton onClick={props.onClickSearch}>검색하기</L.SearchButton>
        </L.SearchDiv>
        <L.ListWrapper>
          <L.Row>
            <L.ColumnHeaderBasic>번호</L.ColumnHeaderBasic>
            <L.ColumnHeaderTitle>제목</L.ColumnHeaderTitle>
            <L.ColumnHeaderBasic>작성자</L.ColumnHeaderBasic>
            <L.ColumnHeaderBasic>날짜</L.ColumnHeaderBasic>
          </L.Row>

          {props.data?.fetchBoards.map((el: any) => (
            <L.Row key={el._id}>
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
        
        <PaginationComponent refetch={props.refetch} count={props.count} />
        <L.Footer>
          <L.MakePageBtn
            src="./list/makePage.png"
            onClick={props.onClickMakePost}
          ></L.MakePageBtn>
        </L.Footer>
      </L.Wrapper>
    </>
  );
}
