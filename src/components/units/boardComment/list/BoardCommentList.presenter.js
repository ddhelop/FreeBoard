import * as L from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <L.Wrapper>
          <L.CommentDiv>
            <L.UserIcon src="/commentList/UserIcon.png" />
            <L.CommentTextDiv>
              <L.UserName>{el.writer}</L.UserName>
              <L.CommentText>{el.contents}</L.CommentText>
              <L.CommentDay>{el.createdAt}</L.CommentDay>
            </L.CommentTextDiv>
            <L.BtnDiv>
              <L.Icon src="/commentList/UpdateIcon.png" />
              <L.Icon
                src="/commentList/DeleteIcon.png"
                id={el._id}
                onClick={props.onClickDeleteComment}
              />
            </L.BtnDiv>
          </L.CommentDiv>
        </L.Wrapper>
      ))}
    </div>
  );
}
