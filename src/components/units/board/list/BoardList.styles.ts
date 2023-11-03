import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  width: 1920px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 100px;
`;

export const ListWrapper = styled.div`
  width: 1100px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 53px;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 16px;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 16px;
`;

export const Footer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
  justify-content: flex-end;
`;

export const PageNumberDiv = styled.div`
  margin-right: 33%;
`;

export const Number = styled.span`
  cursor: pointer;
`;

export const MakePageBtn = styled.img`
  cursor: pointer;
`;
