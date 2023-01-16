import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../app/store";
import Comment from "../Comment/Comment";

const CommentList = () => {
  const commentList = useSelector(
    (state: RootState) => state.comment.commentList
  );

  return (
    <CommentListSection>
      {commentList.length === 0 ? (
        <h2>등록된 댓글이 없습니다.</h2>
      ) : (
        commentList.map((elem) => {
          return <Comment key={elem.id} data={elem} />;
        })
      )}
    </CommentListSection>
  );
};

export default CommentList;

const CommentListSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  border: 2px solid purple;
  border-radius: 0.5rem;
`;
