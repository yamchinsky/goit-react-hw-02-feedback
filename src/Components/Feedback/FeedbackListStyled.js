import styled from "styled-components";

export const FeedbackListContainer = styled.li`
  list-style: none;
  display: flex;

  .btn {
    font-weight: bold;
    width: 100px;
    margin: 5px;
    padding: 5px;
    color: yellow;
    background-color: black;

    :hover {
      color: red;
    }
  }
`;
