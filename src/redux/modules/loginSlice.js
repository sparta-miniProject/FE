// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  login: [],
  signup: [],
  post: [],
  like: [],
  isLoading: true,
  error: null,
};

export const __getLogin = createAsyncThunk(
  "getLogin",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3005/login");
      console.log("data: ", data);
      // console.log(data.data.filter((family) => family.id === payload)[0]);
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI
        .fulfillWithValue
        // data.data.filter((post) => post.id === payload)[0]
        (); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      const [id, indexList] = payload;
      await axios.delete(`https://test101.fly.dev/posts/${id}`);

      for (const i in indexList) {
        await axios.delete(`https://test101.fly.dev/comments/${i}`);
      }
      // console.log(data.data);
      // console.log(data.data.filter((family) => family.id === payload)[0]);
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(payload); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("https://test101.fly.dev/comments");
      // console.log(data.data);
      // console.log(data.data.filter((comment) => comment.postId === payload));
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(
        data.data.filter((comment) => comment.postId === payload)
      ); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "deleteComments",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`https://test101.fly.dev/comments/${payload}`);

      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(payload); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComments = createAsyncThunk(
  "editComments",
  async (payload, thunkAPI) => {
    try {
      const [commentId, editComment] = payload;
      await axios.patch(
        `https://test101.fly.dev/comments/${commentId}`,
        editComment
      );
      // console.log(data.data);
      // thunkAPI.dispatch(__getComments());
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(payload); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __Login = createAsyncThunk(
//     "postLogin",
//     async(payload, thunkAPI) => {
//         try {
//             console.log("payload: ", payload)
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )

export const __addComments = createAsyncThunk(
  "addComments",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const [addComment, postId] = payload;
      const dateId = new Date().toISOString();
      const newComment = { ...addComment, postId: postId, id: dateId };
      console.log(newComment);

      await axios.post("https://test101.fly.dev/comments", newComment);
      // // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(newComment); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    // thunk함수를 사용하면 그냥 reducer로 받을 수 가 없어서 extraReducer로 받는다.
    // thunk함수는 reducer함수 안에 만들어진게 아니기 때문

    ////////////////////// GETPOST /////////////////////////
    [__getLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// DELETEPOST /////////////////////////
    [__deletePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = state.post.filter((post) => post.id !== action.payload);
      state.comments = state.comments.filter(
        (comment) => comment.postId !== action.payload
      );
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// GETCOMMENTS /////////////////////////
    [__getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// DELETECOMMENTS /////////////////////////
    [__deleteComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      ); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(
      //   state.comments.filter((comment) => comment.id !== action.payload)
      // );
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// EDITCOMMENTS /////////////////////////
    [__editComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__editComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // console.log(action.payload);
      // console.log(
      //   state.comments.findIndex((comment) => comment.id === action.payload[0])
      // );
      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload[0]
      );
      state.comments.splice(index, 1, action.payload[1]);
    },
    [__editComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// ADDCOMMENTS /////////////////////////
    [__addComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
