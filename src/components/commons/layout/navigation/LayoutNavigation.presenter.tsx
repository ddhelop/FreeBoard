import { MouseEvent } from "react"
import * as N from "./LayoutNavigation.styles"

interface ILayoutNavigationProps{
  onClickGoFreeBoard: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function LayoutNavigationUI(props:ILayoutNavigationProps){
  
  return (
    <>
      <N.Wrapper>
        <N.MenuWrapper>
          <N.Button onClick={props.onClickGoFreeBoard}>자유게시판</N.Button>
          <N.CenterButton>중고마켓</N.CenterButton>
          <N.Button>마이페이지</N.Button>
        </N.MenuWrapper>
      </N.Wrapper>
    </>
  )
}