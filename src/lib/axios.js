import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://13.125.150.83/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://13.125.150.83/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  checkUserName: (username) => instance.get("/user/idCheck", username),
  postLogout: () => instance.get("/user/logout"),

  // 게시글 관련
  getPost: () => baseURL.get("/posts"),
  getIdPost: (id) => {
    return baseURL.get(`/post/${id}`);
  },

  createPost: (post) => baseURL.post("/post", post),
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) => {
    console.log("string", id, post);
    baseURL.patch(`/post/${id}`, post);
  },
  topPost: () => baseURL.get("/tops"),

  // category,title,imageUrl,post.like

  // 리뷰 관련
  getComment: (postId) => baseURL.get(`/post/${postId}`),
  createComment: (postId, comment) => {
    console.log("postId----->", postId);
    baseURL.post(`/posts/${postId}/comment`, comment);
  },
  deleteComment: (postId, commendId) =>
    baseURL.delete(`/posts/${postId}/comments/${commendId}`),
  editComment: (postId, commendId, editComment) =>
    baseURL.patch(`/posts/${postId}/comments/${commendId}`, editComment),

  // 좋아요 관련
  likeToggle: (postId) => baseURL.post(`/post/${postId}/like`),
};
