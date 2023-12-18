import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as L from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardListTypes";

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

        <L.Footer>
          <L.PageNumberDiv>
            <span onClick={props.onClickPrevPage}>이전</span>
            {new Array(10).fill(1).map(
              (_, index) =>
                index + (props.startPage ?? 1) <= (props.lastPage ?? 0) && (
                  <span
                    key={index+(props.startPage ?? 1)}
                    style={{ margin: "8px" }}
                    id={String(index+(props.startPage ?? 1))}
                    onClick={props.onClickPage}
                  >
                    {index+(props.startPage ?? 1)}
                  </span>
                )
            )}
            <span onClick={props.onClickNextPage}>다음</span>
              
            {/* {<L.Number>하나</L.Number>
            <L.Number>둘</L.Number>} */}
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
