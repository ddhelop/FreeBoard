import * as L from './Login.styles'

export default function LoginUI():JSX.Element {
  return (
    <>
    <L.Wrapper>
      <L.LoginForm>
          <L.MainLogo>freeboard</L.MainLogo>
          <L.Input type='text' placeholder='이메일을 입력해주세요.'/>
          <L.Input type='password' placeholder='비밀번호를 입력해주세요.' />
          <L.CheckContainer>
            <L.CheckBox type='checkbox' />
            <L.Text>로그인 상태 유지</L.Text>
          </L.CheckContainer>
          <L.Button>로그인하기</L.Button>
          <L.DivideLine></L.DivideLine>

          <L.FindForm>
            <L.FindText>이메일 찾기</L.FindText>
            <L.FindText>비밀번호 찾기</L.FindText>
            <L.FindText>회원가입</L.FindText>
          </L.FindForm>
      </L.LoginForm>
    </L.Wrapper>
    </>
  )
}
