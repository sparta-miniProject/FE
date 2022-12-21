import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getIdPost } from "../redux/modules/postSlice";
import {
  RiUserHeartFill,
  RiHeartPulseFill,
  RiHeartPulseLine,
} from "react-icons/ri";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const [likeToggle, setLikeToggle] = useState(false);

  const toggleButton = () => {
    setLikeToggle((likeToggle) => !likeToggle);
    console.log(likeToggle);
  };

  const posts = useSelector((state) => state.posts.posts);
  console.log("posts???", posts);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  return (
    <StDiv detailbox>
      <StSection detailcard>
        <StImg src={posts.imageUrl} alt="이미지" />
        <StDiv textcard>
          <StDiv tcard_1>
            <StDiv titlike>
              <h1>{posts.title}</h1>
              <StDiv liketoggle>
                {likeToggle ? (
                  <RiHeartPulseLine
                    onClick={toggleButton}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <RiHeartPulseFill
                    onClick={toggleButton}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {/* <RiHeartPulseFill /> */}
                {/* <RiHeartPulseLine
                onClick={toggleButton}
                style={{ cursor: "pointer" }}
              ></RiHeartPulseLine> */}
                <StP>{posts.like}</StP>
              </StDiv>
            </StDiv>
            <p>{posts.content}</p>
          </StDiv>
          <StDiv tcard_2>
            <StDiv countuser>
              <StDiv liketoggle>
                <RiUserHeartFill />
                <p>{posts.views}</p>
              </StDiv>
              <p>{posts.username}</p>
            </StDiv>
            <StDiv cardbtns>
              <StButton txtmodi onClick={() => navigate(`/edit/${param.id}`)}>
                수정하기
              </StButton>
              <StButton txtdel onClick={() => navigate("/lists")}>
                삭제하기
              </StButton>
            </StDiv>
          </StDiv>
        </StDiv>
      </StSection>
      <StSection commentcard>
        <div>
          <h1>Comments</h1>
          <button onClick={() => navigate("/lists")}>이전으로</button>
        </div>
        <div>
          <input type="text"></input>
          <button>추가</button>
        </div>
        <div>
          <button>삭제</button>
        </div>
      </StSection>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.detailbox &&
    css`
      display: flex;
      gap: 20px;
    `}
  ${(props) =>
    props.liketoggle &&
    css`
      display: flex;
      align-items: center;
    `}
    ${(props) =>
    props.textcard &&
    css`
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    ${(props) =>
    props.titlike &&
    css`
      display: flex;
      justify-content: space-between;
    `}
    ${(props) =>
    props.countuser &&
    css`
      display: flex;
      justify-content: space-between;
    `}
    ${(props) =>
    props.cardbtns &&
    css`
      display: flex;
      gap: 10px;
    `}
`;

const StSection = styled.section`
  ${(props) =>
    props.detailcard &&
    css`
      width: 300px;
      height: 500px;
      border: 1px solid burlywood;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 5px;
    `}
  ${(props) =>
    props.commentcard &&
    css`
      width: 500px;
      height: 500px;
      border: 1px solid burlywood;
      padding: 20px;
    `}
`;

const StButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid burlywood;
  border-radius: 5px;
  background-color: transparent;
  color: burlywood;
  ${(props) => props.txtmodi && css``}
`;

const StImg = styled.img`
  width: 300px;
  height: 200px;
`;

const StP = styled.p`
  margin: 0;
`;

export default Detail;
