import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      rating
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password : String
    $boardId : ID!
  ){
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardId: $boardId
    ){
      _id
      rating
    }
  }
`

