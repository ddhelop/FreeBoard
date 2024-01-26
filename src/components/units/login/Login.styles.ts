import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width:1920px;
  background-image: url('/login/BG.png');
  position: relative;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8); // 80% 투명도의 검은색 오버레이
    z-index: 1; // 내용이 오버레이 위에 나타나도록 z-index 조정
  }

  > * {
    position: relative; // 오버레이 위에 내용을 배치
    z-index: 2;
  }
`

export const LoginForm = styled.div`
  margin-top:239px;

  width: 384px;
  height: 510px;

  display:flex;
  flex-direction: column;
`

export const MainLogo = styled.div``

export const Input = styled.input`
  width:384px;
  height:64px;
  border-radius:16px;

  background: none;
  border: 1px solid #ffffff;
  padding: 0 9px 0 9px;

  color: white;
  font-size:16px;

  margin-bottom:20px;
`
export const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;

`
export const CheckBox = styled.input`
  width:20px;
  height:20px;
  border: 2px solid white;
  margin-right: 10px;
`

export const Text = styled.p`
  font-size: 16px;
  color: white;
`

export const Button = styled.button`
  margin-top:30px;
  width:384px;
  height:64px;

  border:none;
  border-radius:16px;
  font-size:16px;
  cursor: pointer;
  background-color: #4f4f4f;
  color:#bdbdbd;
  
`

export const DivideLine = styled.div`
  width:384px;
  height:1px;
  background-color: white;

  margin-top: 40px;
`

export const FindForm = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  margin-top: 30px;
`

export const FindText = styled.p`
  color: white;
  margin-right: 15px;
  cursor: pointer;
`
