import styled from "styled-components";

export const FeedbackListContainer = styled.div`
  .feedback-buttons-container {
    display: flex;
    list-style: none;
  }

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
  .statistics-list {
    list-style: none;
    padding-left: 0px;
  }
  .statistics-item {
    display: flex;
    text-align: center;
    align-items: center;
  }
  .statistics-good,
  .statistics-bad,
  .statistics-neutral,
  .statistics-total,
  .statistics-positive {
    padding-right: 10px;
  }
`;
