import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 40px;
  background-color: white;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const ContentsWrapper = styled.div`
  box-sizing: border-box;
  padding: 100px;
  box-shadow: 0px 4px 20px 0px #00000033;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 30px;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserProfileImg = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 21px;
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  color: #828282;
  font-weight: 600;
`;

export const IconDiv = styled.div``;

export const TopIcon = styled.img`
  cursor: pointer;
  margin-left: 28px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 65px;
`;

export const Contents = styled.div`
  font-size: 16px;
  line-height: 23.68px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 13px;
`;

export const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 7px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  font-size: 18px;
  color: #ffd600;
`;

export const DisLikeCount = styled.div`
  font-size: 18px;
  color: #828282;
`;

export const OptionDiv = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const OptionBtn = styled.button`
  width: 179px;
  height: 45px;
  margin: 0 14px 0 14px;
  background-color: white;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;
