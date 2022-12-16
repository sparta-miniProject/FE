import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StDiv>
      <StSpan onClick={() => navigate("/")}>술이 술술</StSpan>
      <StSpan onClick={() => navigate("/login")}>Login</StSpan>
    </StDiv>
  );
};

const StDiv = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 14px 0;
`;

const StSpan = styled.span`
  color: black;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
