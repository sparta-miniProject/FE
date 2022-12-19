import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3005",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apis = {
  getPosts: () => instance.get("/posts"),
  getReviews: (postId) => instance.get(`/reviews?postId=${postId}`),
  getIdPost: (id) => instance.get(`/recipes/${id}`),
  createPost: (post) => instance.post("/post", post),
  createReiews: (review) => instance.post("/reviews", review),
  editPost: (id, post) => instance.patch(`/edit/:${id}`, post),
  deleteRecipes: (id) => instance.delete(`/recipes/${id}`),
  deleteReviews: (id) => instance.delete(`/reviews/${id}`),
};
