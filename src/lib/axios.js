import axios from "axios";
const instance = axios.create({
  baseURL: "https://demo-server-test.vercel.app/",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apis = {
  getPosts: () => instance.get("/posts"),
  getReviews: (postId) => instance.get(`/reviews?postId=${postId}`),
  getIdRecipes: (id) => instance.get(`/recipes/${id}`),
  createRecipes: (recipe) => instance.post("/recipes", recipe),
  createReiews: (review) => instance.post("/reviews", review),
  editRecipes: (id, recipe) => instance.patch(`/recipes/${id}`, recipe),
  deleteRecipes: (id) => instance.delete(`/recipes/${id}`),
  deleteReviews: (id) => instance.delete(`/reviews/${id}`),
};
