import { createSlice } from "@reduxjs/toolkit";
import { UserInputData } from "../../util/typealies";

type CommentState = {
  commentList: UserInputData[];
};

const initialState: CommentState = {
  commentList: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentUpload: (state, action) => {
      state.commentList = [...state.commentList, action.payload];
      return state;
    },
    commentLoad: (state) => {
      return state;
    },
    commentDelete: (state, action) => {
      state.commentList = state.commentList.filter(
        (elem) => elem.id !== action.payload
      );
      return state;
    },
    commentModify: (state, action) => {
      state.commentList.forEach((elem) => {
        if (elem.id === action.payload.id) {
          elem.nickname = action.payload.nickname;
          elem.context = action.payload.context;
        } else {
          return;
        }
      });
      return state;
    },
  },
});

export const { commentUpload, commentLoad, commentDelete, commentModify } =
  commentSlice.actions;

export default commentSlice.reducer;
