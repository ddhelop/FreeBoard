import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(){
  const router = useRouter();

  const onClickHome = () => {
    router.push("../../../../boards")
  }
  const onClickLoginBtn = () => {
    router.push("../../../../login")
  }
  const onClickSignUpBtn = () => {
    router.push("../../../../SignUp")
  }

  return(
    <LayoutHeaderUI
      onClickHome={onClickHome}
      onClickLoginBtn={onClickLoginBtn}
      onClickSignUpBtn={onClickSignUpBtn}
    />
  )
}