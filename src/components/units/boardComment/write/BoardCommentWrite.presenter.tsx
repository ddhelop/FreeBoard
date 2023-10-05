import * as W from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUI } from "./BoardCommentWriteTypes";
export default function BoardCommentWriteUI(props: IBoardCommentWriteUI) {
  return (
    <>
      <W.Wrapper>
        <W.DividedLine></W.DividedLine>
        <W.TitleDiv>
          <W.CommentImg src="/commentWrite/commentIcon.png"></W.CommentImg>
          <W.Title>댓글</W.Title>
        </W.TitleDiv>
        <W.UserDataDiv>
          <W.UserData placeholder="작성자" onChange={props.onChangeWriter} />
          <W.UserData
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
        </W.UserDataDiv>
        <W.CommentDiv>
          <W.CommentText
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <W.CommentTextFooter>
            <W.TextCount>0/100</W.TextCount>
            <W.CommentSubmit onClick={props.onClickSubmit}>
              등록하기
            </W.CommentSubmit>
          </W.CommentTextFooter>
        </W.CommentDiv>
      </W.Wrapper>
    </>
  );
}
