import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../app/store";
import {
  commentModify,
  commentUpload,
} from "../../../app/modules/commentSlice";
import {
  EventObject,
  StyledProps,
  UserInputData,
} from "../../../util/typealies";

const CommentForm: React.FC<{
  data?: UserInputData;
  mode?: string;
  setModifyState?: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const initialState: UserInputData =
    props.data === undefined
      ? new UserInputData("", "", "", "")
      : new UserInputData(
          props.data.nickname,
          "",
          props.data.id,
          props.data.context
        );

  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserInputData>(initialState);
  const commentList = useSelector(
    (state: RootState) => state.comment.commentList
  );
  const modifyData =
    props.data !== undefined && commentList.length !== 0
      ? commentList.filter((elem) => elem.id === props.data?.id)[0]
      : undefined;

  const inputUserData = (e: React.ChangeEvent) => {
    const { id, value }: EventObject = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.nickname === "" || userData.context === "") {
      return;
    }

    if (modifyData !== undefined) {
      if (modifyData.password !== userData.password) {
        return;
      }
    }

    if (props.mode === "modify") {
      dispatch(commentModify(userData));
      if (props.setModifyState !== undefined) {
        props.setModifyState(false);
      }
    } else {
      const sendUserData: UserInputData = {
        ...userData,
        id: new Date().getTime().toString(),
      };

      dispatch(commentUpload(sendUserData));
    }

    setUserData(initialState);
  };

  return (
    <CommentFormContainer onSubmit={submitComment}>
      <CommentFormSection>
        <CommentFormInputArea width="10%">
          <InputBox>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              onChange={inputUserData}
              value={userData.nickname}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              onChange={inputUserData}
              value={userData.password}
            />
          </InputBox>
        </CommentFormInputArea>
        <CommentFormInputArea width="90%">
          <InputBox>
            <label htmlFor="context">내용</label>
            <textarea
              id="context"
              onChange={inputUserData}
              style={{ height: "4rem" }}
              value={userData.context}
            />
          </InputBox>
          <CommentSubmitButton>전송</CommentSubmitButton>
        </CommentFormInputArea>
      </CommentFormSection>
    </CommentFormContainer>
  );
};

export default CommentForm;

const CommentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const CommentFormInputArea = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || "0"};
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: ${(props) => props.width || "100%"};
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 100%;
`;

const CommentSubmitButton = styled.button`
  padding: 0;
  margin: 0;
`;
