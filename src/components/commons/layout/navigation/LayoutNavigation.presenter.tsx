import { Fragment, MouseEvent } from "react"
import * as N from "./LayoutNavigation.styles"

interface ILayoutNavigationProps{
  onClickMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}
const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  {name: "마이페이지", page: "/mypages"},
]

export default function LayoutNavigationUI(props:ILayoutNavigationProps){
  
  return (
    <>
      <N.Wrapper>
        <N.MenuWrapper>
          {NAVIGATION_MENUS.map((el) => (
            <N.MenuItem id={el.page} key={el.page} onClick={props.onClickMenu}>{el.name}</N.MenuItem>
          ))}
          
        </N.MenuWrapper>
      </N.Wrapper>
    </>
  )
}