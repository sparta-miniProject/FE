import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../lib/axios";
// import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  login: [],
  signup: [],
  posts: [],
  comments: [],
  like: [],
  isLoading: true,
  error: null,
};

// 전체 데이터 불러오기
export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getComment(payload);
      //   const data = await axios.get(
      //     `http://localhost:3002/reviews?postId=${payload}`
      //   );
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      // const getId = data.data.filter((review) => review.postId === payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// review 추가
export const __addComment = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createComment(payload);
      //   const data = await axios.post(`http://localhost:3002/reviews`, payload);
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      // const getId = data.data.filter((review) => review.postId === payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// review 삭제
export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.deleteComment(payload);
      //   const data = await axios.delete(
      //     `http://localhost:3002/reviews/${payload}`
      //   );
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __editComment = createAsyncThunk(
  "editComment",
  async (payload, thunkAPI) => {
    try {
      const { id, recipe } = payload;
      console.log("payload: ", payload);
      const data = await apis.editComment(id, recipe);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    // 리뷰 데이터 불러오기
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 리뷰 추가
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      // 액션으로 받은 값 = payload 추가해준다.
      console.log("action: ", action.payload);
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 리뷰 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action: ", action.payload);
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 리뷰 수정 ( 이 부분 수정해야 함 )
    [__editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      state.comments = state.comments.map((com) =>
        com.id === action.payload.id
          ? {
              ...com,
              comment: action.payload.data.comment,
            }
          : com
      );
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = recipesSlice.actions;
export default commentSlice.reducer;
