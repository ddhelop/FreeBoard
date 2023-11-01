import * as H from "./LayoutHeader.styels"

export default function LayoutHeaderUI(){

  return(
    <>
      <H.Wrapper>
        <H.SubWrapper>
          <H.LogoWrapper>
            <H.Icon src="/banner/ggg.png"/>
            <H.Text>FreeBoard</H.Text>
          </H.LogoWrapper>

          <H.LoginWrapper>
            <H.LoginBtn>로그인</H.LoginBtn>
            <H.SignUpBtn>회원가입</H.SignUpBtn>
          </H.LoginWrapper>
          
        </H.SubWrapper>
      </H.Wrapper>
    </>
  )
}