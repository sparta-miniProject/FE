import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Lottie from "lottie-react";
import { beer_image1 } from "../../assets";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <StDiv>
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
        {/* <StSpan onClick={() => navigate("/login")}>Login</StSpan> */}

        {/* 토큰이 있으면 로그아웃으로 버튼 변경(누르면 쿠키삭제) / 토큰 없으면 로그인 버튼 */}
        {!localStorage.getItem("id") ? (
          <StSpan onClick={() => navigate("/login")}>Login</StSpan>
        ) : (
          <StSpan
            onClick={() => {
              // __postLogout();
              alert("로그아웃 되었습니다!");
              localStorage.removeItem("id");
              navigate("/login");
            }}
          >
            Logout
          </StSpan>
        )}
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

export default Header;
