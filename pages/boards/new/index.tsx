import styled from "@emotion/styled";
import BoardWrite from "../../../src/components/units/board/wrtie/BoardWrite.container";

export default function BoardWritePage() {
  
    const Align = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;
    `
  return (
    <Align>
      <BoardWrite />
    </Align>
  )
}
