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
        if (res.data.statusCode === 200) {
          alert(res.data.msg);
        }
        // localStorage.setItem("id", res.headers.authorization);
        navigate("/login");
      })
      .catch((err) => {
        // console.log("error: ", err);
      });
  };

  // id 중복 체크 확인
  const onCheckUserName = (username) => {
    console.log("username---->", username);
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
            required
            minLength={4}
            maxLength={10}
          />
          <StDiv checkid>
            <StButton
              checkbtn
              onClick={() => {
                onCheckUserName(username);
              }}
              type="button"
            >
              중복확인
            </StButton>
            <StP>ID 중복체크를 해주세요</StP>
          </StDiv>
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
          <StLabel htmlFor="checkpassword">CHECK PW</StLabel>
          <StInput
            type="password"
            id="checkpw"
            value={checkPassword}
            onChange={setCheckPassword}
            required
            minLength={8}
            maxLength={15}
          />
        </StDiv>
      </div>
      <StDiv btns>
        <StButton log>가입하기</StButton>
        <StButton reg onClick={() => navigate("/login")}>
          로그인
        </StButton>
      </StDiv>
    </StForm>
  );
};

const StForm = styled.form`
  width: 300px;
  height: 450px;
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
    ${(props) =>
    props.checkid &&
    css`
      display: flex;
      margin-bottom: 10px;
    `}
`;

const StP = styled.p`
  margin: 0;
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

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      width: 150px;
      height: 40px;
      border: 1px solid burlywood;
      font-weight: bold;
      color: #0a0327;
      background-color: burlywood;
    `}
  ${(props) =>
    props.reg &&
    css`
      width: 150px;
      height: 40px;
      border: 1px solid burlywood;
      color: burlywood;
      font-weight: bold;
      background-color: transparent;
    `}
    ${(props) =>
    props.checkbtn &&
    css`
      width: 70px;
      height: 20px;
      margin-right: 10px;
      text-align: center;
      color: #0a0327;
      background-color: burlywood;
      border: 0;
    `}
`;

export default SignUp;
