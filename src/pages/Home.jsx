import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StDiv background>
      <StDiv>
        <StButton onClick={() => navigate("/main")}>
          고주망태가 되어라 얍!
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
`;

const StButton = styled.button`
  background-color: transparent;
  box-shadow: 1px 1px 2px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export default Home;
