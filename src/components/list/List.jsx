import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  RiUserHeartFill,
  RiHeartPulseFill,
  RiHeartPulseLine,
} from "react-icons/ri";

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StDiv card>
        <StImg
          src="https://cdn.discordapp.com/attachments/1037267111585792020/1053351646069014628/022z1mh9cxaop962q0zh.jpeg"
          alt="img"
        />
        <div>
          <StDiv h3>
            <h3>하이볼 황금비율 공유!!</h3>
            <StDiv icon>
              <RiHeartPulseFill />
              <RiHeartPulseLine />
              <p>하트수</p>
            </StDiv>
          </StDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            doloribus. Esse, facilis quos! Inventore, molestiae atque rerum
            accusamus unde repellat ullam ut debitis voluptatum quas placeat?
            Repellendus architecto excepturi illum.
          </p>
          <StDiv clicknum>
            <StDiv clicked>
              <RiUserHeartFill />
              <SPar>조회수</SPar>
            </StDiv>
            <StButton onClick={() => navigate(`/lists/id`)}>
              Detail Page
            </StButton>
          </StDiv>
        </div>
      </StDiv>
    </div>
  );
};

const StImg = styled.img`
  width: 300px;
  height: 200px;
`;
const StDiv = styled.div`
  ${(props) =>
    props.card &&
    css`
      width: 300px;
      height: 420px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 3px 3px 8px 0px #cccccc;
      border-radius: 5px;
    `}
  ${(props) =>
    props.clicknum &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.clicked &&
    css`
      display: flex;
      align-items: center;
    `}
    ${(props) =>
    props.h3 &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
    ${(props) =>
    props.icon &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

const SPar = styled.p`
  margin: 0;
`;

const StButton = styled.button`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
  }
`;

export default List;
