import * as D from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetailTypes";

export default function BoardDetailUI(prop: IBoardDetailUIProps) {
  return (
    <>
      <D.Wrapper>
        <D.ContentsWrapper>
          <D.Header>
            <D.UserDiv>
              <D.UserProfileImg src="/detail/UserImg.png" />
              <D.UserText>
                <D.UserName>{prop.data?.fetchBoard.writer}</D.UserName>
                <D.CreatedAt>
                  Date : {prop.data?.fetchBoard.createdAt}
                </D.CreatedAt>
              </D.UserText>
            </D.UserDiv>
            <D.IconDiv>
              <D.TopIcon src="/detail/Share.png" />
              <D.TopIcon src="/detail/Location.png" />
            </D.IconDiv>
          </D.Header>

          <D.Body>
            <D.Title>{prop.data?.fetchBoard.title}</D.Title>
            <D.Contents>{prop.data?.fetchBoard.contents}</D.Contents>
          </D.Body>

          <D.Bottom>
            <D.LikeDiv>
              <D.LikeIcon src="/detail/Like.png" onClick={prop.onClickLike}/>
              <D.LikeCount>{prop.data?.fetchBoard.likeCount}</D.LikeCount>
            </D.LikeDiv>
            <D.LikeDiv>
              <D.LikeIcon src="/detail/DisLike.png" onClick={prop.onClickDisLike}/>
              <D.DisLikeCount>
                {prop.data?.fetchBoard.dislikeCount}
              </D.DisLikeCount>
            </D.LikeDiv>
          </D.Bottom>
        </D.ContentsWrapper>

        <D.OptionDiv>
          <D.OptionBtn onClick={prop.onClickGoHome}>목록으로</D.OptionBtn>
          <D.OptionBtn onClick={prop.onClickUpdate}>수정하기</D.OptionBtn>
          <D.OptionBtn onClick={prop.onClickDeleteBoard}>삭제하기</D.OptionBtn>
        </D.OptionDiv>
      </D.Wrapper>
    </>
  );
}
