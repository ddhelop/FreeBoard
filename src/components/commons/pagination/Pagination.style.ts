import styled from "@emotion/styled";

export const PageNumberContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:20px;
`

interface IPageProps {
  isActive?: boolean;
}
export const PageNumber = styled.div`
  //text align-center
  text-align: center;
  line-height: 30px;

  border: 1px solid black;
  border-radius : 5px;
  width: 30px;
  height: 30px;
  margin: 5px;

  color: ${(props: IPageProps) => (props.isActive ? "#ffd600" : "black")};
  border: ${(props: IPageProps) => (props.isActive ? "2px solid #ffd600" : "1px solid black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`