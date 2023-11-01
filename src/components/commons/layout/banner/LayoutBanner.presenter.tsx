import * as B from "./LayoutBanner.styles"

export default function LayoutBannerUI(){
  
  return(
    <>
      <B.Wrapper>
        <B.BannerImg src="/banner/image.png"/>
        <B.MenuWrapper>
          <B.Button>자유게시판</B.Button>
          <B.CenterButton>중고마켓</B.CenterButton>
          <B.Button>마이페이지</B.Button>
        </B.MenuWrapper>
      </B.Wrapper>
    </>
  )}