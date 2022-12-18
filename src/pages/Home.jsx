import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { GiDrinking } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StDiv bg>
      <StDiv>
        <StButton onClick={() => navigate("/main")}>
          <StDiv txt>
            <FaGlassCheers />
            고주망태가 되어라 얍!???????????{" "}
            <GiDrinking size="30" style={{ marginLeft: "10px" }}></GiDrinking>
          </StDiv>
        </StButton>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.bg &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 82.5vh;
    `}
  ${(props) =>
    props.txt &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const StButton = styled.button`
  background-color: transparent;
  box-shadow: 1px 1px 2px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
`;

export default Home;
