import * as D from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetailTypes";
import { Modal, Space, Tooltip } from 'antd';

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
            <Space wrap>
              <Tooltip title={prop.data?.fetchBoard.boardAddress?.address}>
              <D.TopIcon src="/detail/Location.png" />
              </Tooltip>
            </Space>

              
              
            </D.IconDiv>
          </D.Header>

          <D.Body>
            <D.Title>{prop.data?.fetchBoard.title}</D.Title>
            <D.Contents>{prop.data?.fetchBoard.contents}</D.Contents>
            {prop.data?.fetchBoard.youtubeUrl != "" && (
              <D.Youtube
                url ={prop.data?.fetchBoard.youtubeUrl ?? ""}
                width="486px"
                height="240px"
                />  
            )}
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
          <D.OptionBtn onClick={prop.showModal}>삭제하기</D.OptionBtn>
        </D.OptionDiv>
      </D.Wrapper>
      <D.DeleteModal
        title="알림"
        open={prop.open}
        onOk={prop.onClickDeleteBoard}
        onCancel={prop.showModal}
      >
        <p>게시글을 정말로 삭제하시겠습니까?</p>
      </D.DeleteModal>
    </>
  );
}
