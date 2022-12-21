import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __getIdPost } from "../redux/modules/postSlice";
import {
  RiUserHeartFill,
  RiHeartPulseFill,
  RiHeartPulseLine,
} from "react-icons/ri";
import { __addComment } from "../redux/modules/commentSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  // const [contents, setContents] = useState("");
  const [review, setReview] = useState("");

  const [likeToggle, setLikeToggle] = useState(false);

  const toggleButton = () => {
    setLikeToggle((likeToggle) => !likeToggle);
    console.log(likeToggle);
  };

  const posts = useSelector((state) => state.posts.posts);
  console.log("posts???", posts);

  const comments = useSelector((state) => state.posts.posts.commentList);
  console.log("comments???", comments);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  const onAddReviewHandler = (username, review) => {
    dispatch(__addComment(username, review));
  };

  const onDeletePost = (id) => {
    dispatch(__deletePost(id));
  };

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
              <StButton onClick={() => navigate(`/edit/${param.id}`)}>
                수정하기
              </StButton>
              <StButton
                carddel
                onClick={() => {
                  onDeletePost(+param.id);
                  navigate("/lists");
                }}
              >
                삭제하기
              </StButton>
            </StDiv>
          </StDiv>
        </StDiv>
      </StSection>
      <StSection commentcard>
        <StDiv commenttit>
          <h1>Comments</h1>
          <StButton comback onClick={() => navigate("/lists")}>
            이전으로
          </StButton>
        </StDiv>
        <StDiv commentinp>
          <StInput
            type="text"
            onChange={(e) => {
              const { value } = e.target;
              setReview({
                ...review,
                comment: value,
              });
            }}
          ></StInput>
          <StButton
            onClick={() => {
              onAddReviewHandler(+param.id, review);
            }}
          >
            추가
          </StButton>
        </StDiv>
        <StDiv commentbox>
          {comments?.map((comment) => (
            <div key={comment.id}>
              <p>{comment.username}</p>
              <p>{comment.comment}</p>
              <StButton commentdel>삭제</StButton>
            </div>
          ))}
        </StDiv>
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
      margin-top: 10px;
    `}
    ${(props) =>
    props.commenttit &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    `}
    ${(props) =>
    props.commentinp &&
    css`
      margin-bottom: 30px;
    `}
    ${(props) =>
    props.commentbox &&
    css`
      width: 500px;
      height: 345px;
      background-color: burlywood;
      border-radius: 10px;
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
      border-radius: 10px;
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

const StInput = styled.input`
  width: 370px;
  height: 15px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid burlywood;
  color: burlywood;
  font-weight: bold;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;
const StButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid burlywood;
  border-radius: 5px;
  background-color: transparent;
  color: burlywood;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: burlywood;
    color: #0a0327;
  }
  ${(props) =>
    props.comback &&
    css`
      background-color: burlywood;
      color: #0a0327;
      border: 0;
      transition: 0.2s;
      &:hover {
        background-color: #0a0327;
        color: burlywood;
        border: 1px solid burlywood;
      }
    `}
  ${(props) =>
    props.carddel &&
    css`
      background-color: burlywood;
      color: #0a0327;
      border: 0;
      transition: 0.2s;
      &:hover {
        background-color: #0a0327;
        color: burlywood;
        border: 1px solid burlywood;
      }
    `}
    ${(props) =>
    props.commentdel &&
    css`
      border: 1px solid burlywood;
      background-color: #0a0327;
      color: burlywood;
      cursor: pointer;
    `}
`;

const StImg = styled.img`
  width: 300px;
  height: 200px;
  background-image: url("https://cdn.discordapp.com/attachments/1054936032312819785/1055014590309732432/image.jpg");
`;

const StP = styled.p`
  margin: 0;
`;

export default Detail;
