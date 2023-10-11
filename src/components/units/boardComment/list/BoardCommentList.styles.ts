import styled from "@emotion/styled";
import {Rate} from "antd"

export const Wrapper = styled.div`
  margin: 40px;
  background-color: white;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const CommentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
`;
export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  margin-top: 5px;
`;
export const CommentTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
export const UserName = styled.p`
  font-size: 16px;
  font-weight: 550;
`;
export const CommentText = styled.p`
  color: #4f4f4f;
  margin-top: 6px;
  width: 80%;
`;
export const CommentDay = styled.p`
  font-size: 12px;
  color: #bdbdbd;
  margin-top: 22px;
  margin-bottom: 25px;
`;
export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 14px;
  cursor: pointer;
`;
export const RateDiv = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center
`

export const ShowRate = styled(Rate)`
  margin-left:20px;
  padding-bottom:7px;
`
