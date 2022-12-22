import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { RiUserHeartFill, RiHeartPulseFill } from "react-icons/ri";
import { useState } from "react";

const List = (props) => {
  const navigate = useNavigate();

  return (
    <StDiv card>
      <StImg src={props.post.imageUrl} alt="img" />
      <StDiv txt>
        <div>
          <StDiv h3>
            {/* <p>ID: {props.post.id}</p> */}
            <h3>{props.post.title}</h3>
            <StDiv icon>
              <RiHeartPulseFill />
              {/* <RiHeartPulseLine
                onClick={toggleButton}
                style={{ cursor: "pointer" }}
              ></RiHeartPulseLine> */}
              <p>{props.post.like}</p>
            </StDiv>
          </StDiv>
          <StP>{props.post.content}</StP>
        </div>
        <StDiv clicknum>
          <StDiv clicked>
            <RiUserHeartFill />
            <SPar>{props.post.views}</SPar>
          </StDiv>
          <StButton onClick={() => navigate(`/lists/${props.post.id}`)}>
            Detail Page
          </StButton>
        </StDiv>
      </StDiv>
    </StDiv>
  );
};

const StImg = styled.img`
  width: 280px;
  height: 180px;
`;
const StDiv = styled.div`
  ${(props) =>
    props.card &&
    css`
      width: 280px;
      height: 400px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 0px 1px 1px burlywood;
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
    ${(props) =>
    props.txt &&
    css`
      width: 280px;
      height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const SPar = styled.p`
  margin: 0;
`;

const StButton = styled.button`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: burlywood;
  color: #0a0327;
  border: 0;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #0a0327;
    color: burlywood;
    border: 1px solid burlywood;
  }
`;

const StP = styled.p`
  height: 110px;
  overflow: scroll;
`;

export default List;
