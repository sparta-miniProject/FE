import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __getIdPost } from "../redux/modules/postSlice";
import {
  RiUserHeartFill,
  RiHeartPulseFill,
  RiHeartPulseLine,
} from "react-icons/ri";
import {
  __addComment,
  __deleteComment,
  __editComment,
} from "../redux/modules/commentSlice";
import { __likeToggle } from "../redux/modules/postSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  // const [contents, setContents] = useState("");
  const [review, setReview] = useState({ comment: "" });
  const [isCommentChange, setIsCommentChange] = useState(false);
  const [editComment, setEditComment] = useState({});
  // const count = useRef(0);

  console.log("isCommentChange---->", isCommentChange);
  const [likeToggle, setLikeToggle] = useState(false);

  const toggleButton = (postId) => {
    dispatch(__likeToggle(postId));
    setLikeToggle((likeToggle) => !likeToggle);
    // count += 1;
    console.log(likeToggle);
  };

  const posts = useSelector((state) => state.posts.post);
  console.log("posts???", posts);

  const comments = posts.commentList;
  console.log("comments???", comments);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  const onAddReviewHandler = () => {
    dispatch(__addComment([param.id, review])).then((res) => {
      console.log(res.payload);
      if (res.payload.statusCode === 200) {
        alert(res.payload.msg);
        navigate(`/lists/${param.id}`);
      }
    });
    setReview({ comment: "" });
  };

  const onDeletePost = (id) => {
    dispatch(__deletePost(id));
    // navigate("/lists");
  };

  const onDeleteReviewHandler = (commentId) => {
    dispatch(__deleteComment({ postId: +param.id, commentId: commentId }));
    navigate(`/lists/${param.id}`);
  };

  const onEditReviewHandler = (commentId) => {
    if (isCommentChange === false) {
      setIsCommentChange(true);
    } else {
      dispatch(
        __editComment({ postId: +param.id, commentId: commentId, editComment })
      );
      setIsCommentChange(false);
    }
  };

  // .then((res) => {
  //   console.log("res: ", res);
  //   if (res.statusCode === 400) {
  //     alert(res.msg);
  //     return;
  //   }
  // })
  // .catch((err) => console.log(err));

  return (
    <StDiv detailbox>
      <StSection detailcard>
        <StImg src={posts.imageUrl} alt="이미지" />
        <StDiv textcard>
          <StDiv tcard_1>
            <StDiv titlike>
              <h1 style={{ wordBreak: "break-all" }}>{posts.title}</h1>
              <StDiv liketoggle>
                {likeToggle === true ? (
                  <RiHeartPulseFill
                    onClick={() => {
                      toggleButton(posts.id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <RiHeartPulseLine
                    onClick={() => {
                      toggleButton(posts.id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {/* <RiHeartPulseFill /> */}
                {/* <RiHeartPulseLine
                onClick={toggleButton}
                style={{ cursor: "pointer" }}
              ></RiHeartPulseLine> */}
                <StP>
                  {posts.like}
                  {/* / {count} */}
                </StP>
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
          <StButton onClick={onAddReviewHandler}>추가</StButton>
        </StDiv>
        <StDiv commentbox>
          <StDiv commsty>
            <StP commlist>NICKNAME</StP>
            <StP commlist>COMMENT</StP>
            <span></span>
          </StDiv>
          <hr style={{ border: "1px solid #0a0327" }} />
          {comments?.map((comment) => (
            <StDiv commsty key={comment.id}>
              {isCommentChange === false ? (
                <StDiv commsty>
                  <StP commlist>{comment.username}</StP>
                  <StP commlist>{comment.content}</StP>
                </StDiv>
              ) : (
                <div>
                  <StP commlist>{comment.username}</StP>
                  <StInput
                    modinput
                    type="text"
                    defaultValue={comment.content}
                    onChange={(e) => {
                      const { value } = e.target;
                      setEditComment({
                        ...editComment,
                        comment: value,
                      });
                      console.log("editComment-------->", editComment);
                    }}
                  ></StInput>
                </div>
              )}
              <div>
                <StButton
                  commentmod
                  onClick={() => {
                    onEditReviewHandler(comment.id);
                    console.log("id----->", param.id, comment.id);
                  }}
                >
                  수정
                </StButton>
                <StButton
                  commentdel
                  onClick={() => {
                    onDeleteReviewHandler(comment.id);
                    console.log("id----->", param.id, comment.id);
                  }}
                >
                  삭제
                </StButton>
              </div>
            </StDiv>
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
    ${(props) =>
    props.commsty &&
    css`
      display: flex;
      padding: 10px;
      justify-content: space-between;
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
  ${(props) =>
    props.modinput &&
    css`
      border-bottom: 1px solid #0a0327;
      color: #0a0327;
    `}
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
      width: 50px;
      height: 30px;
      border: 1px solid burlywood;
      background-color: #0a0327;
      color: burlywood;
      &:hover {
        background-color: burlywood;
        color: #0a0327;
        border: 1px solid #0a0327;
      }
    `}
    ${(props) =>
    props.commentmod &&
    css`
      width: 50px;
      height: 30px;
      border: 1px solid burlywood;
      background-color: #0a0327;
      color: burlywood;
      &:hover {
        background-color: burlywood;
        color: #0a0327;
        border: 1px solid #0a0327;
      }
    `}
`;

const StImg = styled.img`
  width: 300px;
  height: 200px;
  background-image: url("https://cdn.discordapp.com/attachments/1054936032312819785/1055014590309732432/image.jpg");
`;

const StP = styled.p`
  margin: 0;
  ${(props) =>
    props.commlist &&
    css`
      color: #0a0327;
    `}
`;

export default Detail;
