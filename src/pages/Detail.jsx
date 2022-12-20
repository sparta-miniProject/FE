import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <StDiv allbox>
      <Stleft>
        <h1>하이볼 레시피 공유!!</h1>
        <h5>내용여기</h5>
        <div>
          <StButton onClick={() => navigate("/main")}>수정하기</StButton>
          <StButton onClick={() => navigate("/main")}>삭제하기</StButton>
        </div>
      </Stleft>
      <StDiv comments>
        <span>asdf</span>
        <StButton onClick={() => navigate("/main")}>수정</StButton>
        <StButton onClick={() => navigate("/main")}>삭제</StButton>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.comments &&
    css`
      float: right;
      display: flex;
      /* flex-direction: right; */
      justify-content: flex-start;
      align-items: center;
      background-color: yellow;
      /* min-height: 82.5vh; */
      width: 500px;
      height: 400px;
    `}
  ${(props) =>
    ~props.allbox &&
    css`
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    `}
`;

const Stleft = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 82.5vh; */
  background-color: yellow;
  width: 300px;
  height: 400px;
`;

const StButton = styled.button`
  background-color: transparent;
  box-shadow: 1px 1px 2px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export default Detail;
