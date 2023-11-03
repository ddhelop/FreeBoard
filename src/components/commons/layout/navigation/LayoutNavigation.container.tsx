import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";


export default function LayoutNavigation() {
  const router = useRouter();

  const onClickGoFreeBoard = () => {
    router.push("../../../../boards")
  }

  return (
    <>
      <LayoutNavigationUI
        onClickGoFreeBoard={onClickGoFreeBoard}
      />
    </>
  )
}