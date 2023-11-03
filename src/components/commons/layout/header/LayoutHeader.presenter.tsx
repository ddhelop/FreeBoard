import { MouseEvent } from "react";
import * as H from "./LayoutHeader.styels"

interface ILayoutHeaderProps {
  onClickHome: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLoginBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSignUpBtn: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function LayoutHeaderUI(props:ILayoutHeaderProps){

  return(
    <>
      <H.Wrapper>
        <H.SubWrapper>
          <H.LogoWrapper onClick={props.onClickHome}>
            <H.Icon src="/banner/ggg.png"/>
            <H.Text>FreeBoard</H.Text>
          </H.LogoWrapper>

          <H.LoginWrapper>
            <H.LoginBtn onClick={props.onClickLoginBtn}>로그인</H.LoginBtn>
            <H.SignUpBtn onClick={props.onClickSignUpBtn}>회원가입</H.SignUpBtn>
          </H.LoginWrapper>
          
        </H.SubWrapper>
      </H.Wrapper>
    </>
  )
}