
import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayoutProps{
  children: JSX.Element;
}

const HIDDEN_HEADER = [
  "/login",
]

export default function Layout(props: ILayoutProps): JSX.Element{
  const router = useRouter()
  
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)

  return (

    <>
      {!isHiddenHeader && 
        <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation /></div>}
      
      <div>{props.children}</div>
    </>
  )
}