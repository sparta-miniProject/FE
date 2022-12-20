import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Lottie from "lottie-react";
// // import { useEffect } from "react";
import { beer_image1 } from "../../assets";
import "./header.css";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <StDiv>
        <SidebarBox isOpen={isOpen}>
          <button onClick={() => setIsOpen(false)}>X</button>
          <p>이름: 내이름</p>
        </SidebarBox>
        <StLogo>
          <img
            src="assets/img/soju.png"
            alt="soju"
            width={"165"}
            height={"115"}
            onClick={() => navigate("/")}
            stytle="cursor: pointer"
          />
        </StLogo>
        {/* <StSpan onClick={() => navigate("/")}>술이 술술</StSpan> */}
        <Lottie className="beer_image1" animationData={beer_image1} />
        <StSpan onClick={() => navigate("/login")}>Login</StSpan>
      </StDiv>
    </div>
  );
};

const StDiv = styled.div`
  background-color: burlywood;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  padding-right: 30px;
  padding-left: -20px;

  /* margin: 14px 0; */
`;

const StSpan = styled.span`
  color: black;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const StLogo = styled.div`
  cursor: pointer;
`;

const SidebarBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%); // 사이드바 위로 올려둠
  width: 12.5rem;
  padding: 0.875rem;
  border-radius: 0.25rem;
  background: #fff;
  opacity: 0; // 투명도 조절하여 부드럽게 보이게하기
  transition: transform 500ms linear, opacity 500ms linear;
  pointer-events: none; // 사이드바 비활성화 일 때 클릭 안 됨

  & button {
    cursor: pointer;
  }

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
      pointer-events: visible;
    `}
`;
export default Header;
