import { apis } from "../../lib/axios";
// import axios from "axios";

export const __postLogin = async (post) => {
  try {
    const data = await apis.postLogin(post);
    // 로그인 임시 테스트
    // const data = await axios.post("https://reqres.in/api/login", {
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka",
    // });
    console.log("post: ", post);
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

export const __postSignup = async (post) => {
  try {
    const data = await apis.postSignup(post);
    console.log("post: ", post);
    console.log("data: ", data);
    // alert("회원가입 성공");
    return data;
  } catch (error) {
    alert("error", error.response.data.msg);
  }
};

export const __postLogout = async () => {
  try {
    await apis.postLogout();
    alert("로그아웃 성공");
  } catch (error) {
    alert("error", error.respose.data.msg);
  }
};

// id 중복체크
export const __checkUserName = async (username) => {
  try {
    const data = await apis.checkUserName(username);
    console.log("username: ", username);
    console.log("data: ", data);
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    // useSweet(1000, "error", error.response.data.msg);
  }
};
