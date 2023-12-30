import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

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

  const Align = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;
    `

  return (
    <Align>
      <BoardWrite isEdit={true} data={data} />
    </Align>
      )
}
