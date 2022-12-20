import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { __checkUserName, __postSignup } from "../redux/modules/loginSlice";
import { useInput } from "../lib/utils/useInput";
// import { __postSignup } from "../redux/modules/loginSlice";

const SignUp = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const [checkPassword, setCheckPassword] = useInput();

  const navigate = useNavigate();

  const onSubmitSignup = (e) => {
    e.preventDefault();
    __postSignup({
      username,
      password,
      checkPassword,
    })
      .then((res) => {
        console.log("signup res: ", res);
        alert(res.data.msg);
        // localStorage.setItem("id", res.headers.authorization);
        navigate("/login");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  // id 중복 체크 확인
  const onCheckUserName = (username) => {
    __checkUserName(username).then((res) => {
      console.log(res);
    });
  };

  return (
    <StForm onSubmit={onSubmitSignup}>
      <div>
        <h1>회원가입</h1>
        <StDiv inputbox>
          <StLabel htmlFor="username">ID</StLabel>
          <StInput
            type="text"
            id="username"
            value={username}
            onChange={setUserName}
          />
          <div>
            <button
              onClick={() => {
                onCheckUserName(username);
              }}
              type="button"
              style={{ textAlign: "right" }}
            >
              중복확인
            </button>
          </div>
          <StLabel htmlFor="password">PW</StLabel>
          <StInput
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
          />
          <StLabel htmlFor="checkpassword">CHECK PW</StLabel>
          <StInput
            type="password"
            id="checkpw"
            value={checkPassword}
            onChange={setCheckPassword}
          />
        </StDiv>
      </div>
      <StDiv btns>
        <Stbutton log>가입하기</Stbutton>
        <Stbutton reg onClick={() => navigate("/login")}>
          로그인
        </Stbutton>
      </StDiv>
    </StForm>
  );
};

const StForm = styled.form`
  width: 300px;
  height: 400px;
  /* background-color: aqua; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
  border: 3px solid burlywood;
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
      margin-top: 70px;
    `}
`;

const StLabel = styled.label`
  font-size: 20px;
`;

const StInput = styled.input`
  width: 250px;
  height: 35px;
  border: 0;
  border-bottom: 1px solid black;
  box-shadow: 1px 1px 4px 0px;
  margin: 15px;
  padding-left: 10px;
`;

const Stbutton = styled.button`
  width: 200px;
  height: 50px;
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

export default SignUp;
