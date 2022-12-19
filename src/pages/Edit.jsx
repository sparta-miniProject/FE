import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { apis } from "../lib/axios";
import Button from "../components/button/Button";

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [editPost, setEditPost] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();
  const [post, setPosts] = useState([]);

  const onEditImage = (id, post) => {
    apis.editPosts(id, post);
    console.log(id);
    console
      .log(post)
      .then((res) => {
        //   window.location.href = "/lists";
      })

      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    apis
      .getIdPost(param.id)
      .then((res) => {
        const get = res.data;
        setPosts(get);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [param.id]);

  const onEditPost = (id, post) => {
    apis
      .editPost(id, post)
      .then((res) => {
        //   window.location.href = "/lists";
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // 왜 렌더링이 안되는가?

  return (
    <StDiv>
      <StForm>
        <StH1>당신의 레시피를 수정해보세요!</StH1>
        <StLabel htmlFor="category">카테고리</StLabel>
        <StSelect
          type="select"
          name="category"
          id="category"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setEditPost({
              ...editPost,
              // id: Math.floor(Math.random() * 10000),
              category: value,
            });
          }}
        >
          <option value="choose">선 택 해 주 세 요</option>
          <option value="drink">🍻 술 🍻</option>
          <option value="recipe">🥇 황 금 비 율 🥇</option>
          <option value="food">🍲 안 주 🍲</option>
        </StSelect>
        <StLabel htmlFor="title">제목</StLabel>
        <StInput
          type="text"
          name="title"
          id="title"
          maxLength={15}
          minLengt={3}
          defaultValue={post.title ? post.title : ""}
          onChange={(ev) => {
            const { value } = ev.target;
            setEditPost({
              ...editPost,
              title: value,
            });
          }}
        />
        <StLabel htmlFor="imgurl">이미지</StLabel>

        {/* <React.Fragment>
      <img src={"/img/profile.png"}></img>
      <input type="file" ref={imgRef} onChange={onChangeImage}></input>
    </React.Fragment>
  ); */}
        <StImage
          type="file"
          name="imgurl"
          id="imgurl"
          defaultValue={post.imgurl ? post.imgurl : ""}
          onChange={(ev) => {
            const { value } = ev.target;
            setEditPost({
              ...editPost,
              imgurl: value,
            });
          }}
        >
          <img
            alt="이미지 넣어주라능~"
            src={imageUrl ? imageUrl : ""}
            width="500px"
            height="450px"
          ></img>
          <input
            type="file"
            ref={imgRef}
            onChange={setImageUrl}
            width="500px"
          ></input>
        </StImage>

        <StLabel htmlFor="content">내용</StLabel>
        <StTextarea
          required
          maxLength={200}
          minLength={10}
          placeholder="레시피를 자세히 소개해주세요!"
          defaultValue={post.content ? post.content : ""}
          name="content"
          id="content"
          cols="40"
          rows="10"
          onChange={(ev) => {
            const { value } = ev.target;
            onEditPost({
              ...editPost,
              content: value,
            });
          }}
        ></StTextarea>
        <div>
          <Button
            add
            onClick={(e) => {
              e.preventDefault();
              // onSubmitHandler(editRecipe);
              onEditImage(param.id, editPost);
              navigate("/lists");
            }}
          >
            수정하기
          </Button>
          {/* <Link to={`/lists`}> */}
          <Button
            back
            onClick={() => {
              navigate("/lists");
            }}
          >
            Back
          </Button>
          {/* </Link> */}
        </div>
      </StForm>
    </StDiv>
  );
};

const StDiv = styled.div`
  max-width: 100%;
  width: 95%;
  min-height: 150vh;
  /* filter: brightness(1); */
  background-image: url("https://img.freepik.com/premium-vector/seamless-pattern-with-soju-bottles-bottles-with-korean-letters-meaning-burned-liquor_197792-1639.jpg?w=2000");
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.096),
      rgba(0, 0, 0, 0.105)
    ),
    url("https://media.discordapp.net/attachments/1037267111585792020/1052637612629823518/image0.jpg"); */
  background-size: cover;
  opacity: 0.8;
`;

const StForm = styled.form`
  /* background-color: aqua; */
  max-width: 1000px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: -100px auto 0 auto;
  /* margin-top: -100px; */
`;

const StH1 = styled.h1`
  padding-top: 100px;
  color: black;
  font-size: 50px;
  margin-bottom: 70px;
  /* background-color: #b0c4cc;
  border-radius: 20px; */
`;
const StLabel = styled.label`
  color: black;
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
`;

const StInput = styled.input`
  font-weight: bold;
  color: black;
  text-align: center;
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border: 0;
  border-bottom: 3px solid #4ea1ba;
  background-color: transparent;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const StTextarea = styled.textarea`
  width: 500px;
  border-radius: 10px;
  border: 0;
  border-bottom: 3px solid #4ea1ba;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;
  opacity: 0.9;

  &:focus {
    outline: none;
  }
`;
const StSelect = styled.select`
  text-align: center;
  font-size: 20px;
  width: 300px;
  padding: 5px;
  border: 1px solid #999;
  font-family: "Nanumgothic";
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const StImage = styled.div`
  align-items: center;
  width: 500px;
`;
const StImageSize = styled.image`
  width: 100px;
  height: 50px;
`;
export default Edit;
