import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { GiDrinking } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  // 로그인 안하면 이용 불가
  const onClickTokenHandler = () => {
    if (!localStorage.getItem("id")) {
      alert("로그인 후 이용 가능합니다!");
      return navigate("/login");
    } else {
      navigate("/main");
    }
  };

  return (
    <StDiv bg>
      <StDiv>
        <StButton onClick={onClickTokenHandler}>
          {/* <StButton onClick={() => navigate("/main")}> */}
          <StSpan>
            <FaGlassCheers />
            고주망태가 되어라 얍!?
            <GiDrinking size="30" style={{ marginLeft: "10px" }}></GiDrinking>
          </StSpan>
        </StButton>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 82.5vh;
  /* ${(props) =>
    props.bg &&
    css`
      width: 100%;
      background-image: url("https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/11aj/image/cCmVyw4nKBbtw_hn8sv5NzcjMH8.JPG");
    `} */
`;

const StSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StButton = styled.button`
  /* box-shadow: 1px 1px 2px 0px; */
  cursor: pointer;
  font-size: 20px;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 20px;
  background-color: burlywood;
  border: 0;
  color: black;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #0a0327;
    color: burlywood;
    /* border: 1px solid burlywood; */
  }
`;

export default Home;
