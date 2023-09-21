import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.query";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();

  const onClickMakePost = () => {
    router.push("../../../../boards/new");
  };

  const onClickRow = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const { data } = useQuery(FETCH_BOARDS);
  return (
    <BoardListUI
      data={data}
      onClickMakePost={onClickMakePost}
      onClickRow={onClickRow}
    />
  );
}
