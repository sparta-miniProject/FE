import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <StDiv logbox>
      <div>
        <StDiv inputbox>
          <StLabel htmlFor="username">ID</StLabel>
          <StInput type="text" id="username" name="username" />
          <StLabel htmlFor="password">PW</StLabel>
          <StInput type="password" id="password" name="username" />
          <StLabel htmlFor="checkpassword">CHECK PW</StLabel>
          <StInput type="password" id="checkpassword" />
        </StDiv>
        <StDiv btns>
          <Stbutton log>가입하기</Stbutton>
          <Stbutton reg onClick={() => navigate("/")}>
            이전으로
          </Stbutton>
        </StDiv>
      </div>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.logbox &&
    css`
      width: 300px;
      height: 400px;
      /* background-color: aqua; */
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -150px;
    `}
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
`;

const Stbutton = styled.button`
  padding: 10px 40px;
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      color: white;
      background-color: black;
    `}
  ${(props) =>
    props.reg &&
    css`
      bordercolor: black;
      background-color: transparent;
    `}
`;

export default SignUp;
