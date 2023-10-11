import styled from "@emotion/styled";
import {Rate} from "antd"

export const Wrapper = styled.div`
  margin: 40px;
  background-color: white;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const DividedLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin-top: 50px;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  align-items: center;
`;
export const CommentImg = styled.img`
  margin-right: 13px;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 550;
`;

export const UserDataDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
export const UserData = styled.input`
  width: 180px;
  height: 52px;
  padding: 13px;
  color: #828282;
  margin-right: 20px;
  border: 1px solid #bdbdbd;
  font-weight: 550;
`;

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border: 1px solid #bdbdbd;
`;

export const CommentText = styled.input`
  border: none;
  height: 110px;
  padding: 15px;
  font-size: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const CommentTextFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
  height: 51px;
  align-items: center;
`;
export const TextCount = styled.p`
  font-size: 16px;
  color: #bdbdbd;
  margin-left: 15px;
`;
export const CommentSubmit = styled.button`
  width: 91px;
  height: 51px;
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const RateStar = styled(Rate)`
  margin-top : 8px;
  margin-left :15px;
`