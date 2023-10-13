import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/wrtie/BoardWrite.container";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardWritePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);
  return <BoardWrite isEdit={true} data={data} />;
}
