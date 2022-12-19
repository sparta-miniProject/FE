import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postSlice";
import comments from "../modules/commentSlice";
// import login from "../modules/loginSlice";

const store = configureStore({
  reducer: { posts, comments },
});

export default store;
