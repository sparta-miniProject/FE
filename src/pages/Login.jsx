import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { __postLogin } from "../redux/modules/loginSlice";
import { useInput } from "../lib/utils/useInput";

const Login = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  // 로그인 관련
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      username,
      password,
    })
      .then((res) => {
        console.log("res: ", res);
        if (res.data.statusCode === 200) {
          alert("로그인 성공");
        }
        localStorage.setItem("id", res.headers.authorization);
        navigate("/");
      })
      .catch((error) => alert("ID 또는 비밀번호가 틀립니다!"));
    // .catch((error) => alert(error.response.data.msg));
  };

  return (
    <StForm onSubmit={onSubmitLogin}>
      <div>
        <h1>로그인</h1>
        <StDiv inputbox>
          <StLabel htmlFor="username">ID</StLabel>
          <StInput
            type="text"
            id="username"
            value={username}
            onChange={setUserName}
            required
            minLength={4}
            maxLength={10}
          />
          <StLabel htmlFor="password">PW</StLabel>
          <StInput
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
            minLength={8}
            maxLength={15}
          />
        </StDiv>
      </div>
      <StDiv btns>
        <Stbutton log>로그인</Stbutton>
        <Stbutton reg onClick={() => navigate("/signup")}>
          회원가입
        </Stbutton>
      </StDiv>
    </StForm>
  );
};

const StForm = styled.form`
  width: 300px;
  height: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
  /* border: 3px solid burlywood; */
  border-radius: 10px;
`;
const StDiv = styled.div`
  ${(props) =>
    props.inputbox &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    `}
  ${(props) =>
    props.btns &&
    css`
      display: flex;
      justify-content: center;
      gap: 10px;
    `}
`;

const StLabel = styled.label`
  font-size: 20px;
`;

const StInput = styled.input`
  width: 250px;
  height: 35px;
  border: 0;
  border-bottom: 1px solid burlywood;
  background-color: transparent;
  color: burlywood;
  margin: 15px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

const Stbutton = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      border: 1px solid burlywood;
      font-weight: bold;
      color: #0a0327;
      background-color: burlywood;
    `}
  ${(props) =>
    props.reg &&
    css`
      border: 1px solid burlywood;
      color: burlywood;
      font-weight: bold;
      background-color: transparent;
    `}
`;

export default Login;
