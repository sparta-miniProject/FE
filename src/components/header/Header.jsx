import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { beer_image1 } from "../../assets";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StDiv>
        <StSpan onClick={() => navigate("/")}>술이 술술</StSpan>
        <Lottie className="beer_image1" animationData={beer_image1} />
        <StSpan onClick={() => navigate("/login")}>Login</StSpan>
      </StDiv>
    </div>
  );
};

const StDiv = styled.div`
  height: 100px;
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
