import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps{
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps){

  return (

    <>
      <LayoutHeader />
      <LayoutBanner />
      <div>{props.children}</div>
    </>
  )
}