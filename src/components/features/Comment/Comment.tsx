import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { commentDelete } from "../../../app/modules/commentSlice";
import { UserInputData } from "../../../util/typealies";
import CommentForm from "../CommentForm/CommentForm";

const Comment: React.FC<{ data: UserInputData }> = (props) => {
  const dispatch = useDispatch();
  const [modifyState, setModifyState] = useState(false);

  const ModifyThisComment = (e: React.MouseEvent) => {
    e.preventDefault();

    setModifyState(!modifyState);
  };

  const deleteThisComment = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(commentDelete(props.data.id));
  };

  return (
    <CommentBox>
      {modifyState === false ? (
        <>
          <h2 style={{ margin: "0" }}>{props.data.nickname}</h2>
          <p style={{ margin: "2rem 0" }}>{props.data.context}</p>
          <div style={{ display: "flex", margin: "0 0 0 auto", gap: "1rem" }}>
            <button onClick={ModifyThisComment}>수정</button>
            <button onClick={deleteThisComment}>삭제</button>
          </div>
        </>
      ) : (
        <CommentForm
          data={props.data}
          mode="modify"
          setModifyState={setModifyState}
        />
      )}
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid violet;
  border-radius: 1rem;
  margin: 0.5rem 0;
`;
