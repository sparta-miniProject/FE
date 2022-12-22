import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { apis } from "../lib/axios";
import Button from "../components/button/Button";
import { useDispatch } from "react-redux";
import { __editPost, __getIdPost } from "../redux/modules/postSlice";
import { useSelector } from "react-redux";

// import axios from "axios";

const Post = () => {
  const navigate = useNavigate();
  const param = useParams();
  const imgRef = useRef();
  // const [post, setPost] = useState();
  const dispatch = useDispatch();

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    // const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      // const image = reader.result;
      setEditPost({
        ...editpost,

        imageUrl: reader.result,
      });
    };
  };

  const [imagefile, setImageFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [editpost, setEditPost] = useState([]);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  // console.log(imageUrl);
  // const [imageUrl, setImageUrl] = useState("디폴트 이미지 주소");
  // const setFile = (e) => {};

  // const setFileImage = (e) => {
  //   if (e.target.files[0]) {
  //     const formdata = new FormData();
  //     formdata.append("imageUrl", e.target.files[0]);
  //     formdata.append("title", title);
  //     formdata.append("content", content);
  //     formdata.append("category", category);

  //     apis
  //       .post("http://13.125.150.83/api/post", formdata)
  //       .then((res) => {
  //         if (res.data.result === "SUCCESS") {
  //           window.alert("SUCCESS");
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // };

  // {
  //   title: "",
  //   file: "",
  // }

  // const [post, setPost] = useState({
  //   title: "",
  //   imageUrl: "",
  //   content: "",
  //   category: "",
  // });
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   apis
  //     .getPost()
  //     .then((res) => {
  //       const get = res.data;
  //       setPost(get);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // }, []);

  const onEditHandler = (id, post) => {
    const formdata = new FormData();
    formdata.append("file", imagefile);
    formdata.append("title", title.title);
    formdata.append("content", content.content);
    formdata.append("category", category.category);
    console.log(formdata);
    console.log(typeof formdata);
    // dispatch(__editPost(formdata), { id, post });
    dispatch(__editPost({ id, formdata }));
    for (const pair of formdata) {
      // console.log("Editformdata :", formdata);
      console.log(pair[0] + ", " + pair[1]);
    }
  };
  const post = useSelector((state) => state.posts.post);
  console.log("posts???", post);

  return (
    <StDiv>
      <StForm
        onSubmit={(e) => {
          e.preventDefault();
          onEditHandler(Number(param.id), editpost);
          navigate("/lists");
          console.log(param.id);
        }}
      >
        <StH1>당신의 레시피는?</StH1>
        <StLabel htmlFor="category">카테고리</StLabel>
        <br></br>
        <StSelect
          type="select"
          name="category"
          id="category"
          required
          defaultValue={post.category}
          placeholder="카테고리를 선택해주세요."
          onChange={(ev) => {
            const { value } = ev.target;
            setCategory({
              ...category,

              category: value,
            });
          }}
        >
          <option value="choose">선 택 해 주 세 요</option>
          <option value="drink">🍻 술 🍻</option>
          <option value="recipe">🥇 황 금 비 율 🥇</option>
          <option value="food">🍲 안 주 🍲</option>
        </StSelect>
        <br></br>
        <StLabel htmlFor="title">제목</StLabel>
        <br></br>
        <StInput
          type="text"
          name="title"
          id="title"
          maxLength={20}
          minLengt={3}
          placeholder="나만의 레시피 제목을 정해주세요"
          required
          defaultValue={post.title}
          onChange={(ev) => {
            const { value } = ev.target;
            setTitle({
              ...title,

              title: value,
            });
          }}
        ></StInput>
        <br></br>
        <StLabel htmlFor="imgurl">이미지</StLabel>
        <br></br>
        {/* <React.Fragment>
      <img src={"/img/profile.png"}></img>
      <input type="file" ref={imgRef} onChange={onChangeImage}></input>
    </React.Fragment>
  ); */}
        <StImage
          required
          placeholder=""
          type="file"
          name="imageUrl"
          id="imageUrl"
          defaultValue={imageUrl}
          // onChange={(ev) => {
          //   const {  } = ev.target;
          //   setPost({
          //     ...post,

          //     imageUrl: {},
          //   });
          // }}
        >
          <img
            alt=""
            src={imageUrl ? imageUrl : post.imageUrl}
            width="500px"
            height="450px"
          ></img>
          <input
            type="file"
            ref={imgRef}
            onChange={onChangeImage}
            //onChange={setFileImage}
            width="500px"
          ></input>
        </StImage>
        <br></br>
        <StLabel htmlFor="content">내용</StLabel>
        <br></br>
        <StTextarea
          required
          defaultValue={post.content}
          maxLength={200}
          minLength={10}
          placeholder="레시피를 자세히 소개해주세요!"
          name="content"
          id="content"
          cols="40"
          rows="10"
          onChange={(ev) => {
            const { value } = ev.target;
            setContent({
              ...content,

              content: value,
            });
          }}
        ></StTextarea>
        <br></br>
        <div>
          <Button
            add
            // onClick={() => {
            //   navigate("/lists");
            // }}
          >
            수정하기
          </Button>
          {/* <Link to={`/lists`}> */}
          <Button
            back
            onClick={() => {
              navigate("/main");
            }}
          >
            Back
          </Button>
          {/* </Link> */}
          <br></br>
          <br></br>
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
  /* background-image: url("https://img.freepik.com/premium-vector/seamless-pattern-with-soju-bottles-bottles-with-korean-letters-meaning-burned-liquor_197792-1639.jpg?w=2000"); */
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.096),
      rgba(0, 0, 0, 0.105)
    ),
    url("https://media.discordapp.net/attachments/1037267111585792020/1052637612629823518/image0.jpg"); */
  background-size: cover;
  opacity: 1;
`;

const StForm = styled.form`
  border-radius: 5px;
  max-width: 800px;
  border: 1px solid burlywood;
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
  color: burlywood;
  font-size: 50px;
  margin-bottom: 70px;
  /* background-color: #b0c4cc;
  border-radius: 20px; */
`;
const StLabel = styled.label`
  color: burlywood;
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
`;

const StInput = styled.input`
  font-weight: bold;
  color: burlywood;
  text-align: center;
  width: 500px;
  height: 30px;

  border: 0;
  border-bottom: 1px solid burlywood;
  background-color: transparent;
  background-color: #0a0327;
  font-size: 20px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const StTextarea = styled.textarea`
  width: 500px;
  border: 0;
  border-bottom: 1px solid burlywood;
  background-color: #0a0327;
  font-size: 20px;
  padding: 10px;
  opacity: 0.9;
  color: burlywood;

  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const StSelect = styled.select`
  background-color: #0a0327;
  text-align: center;
  font-size: 20px;
  color: burlywood;
  width: 300px;
  padding: 5px;
  border: 1px solid burlywood;
  font-family: "Nanumgothic";
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: burlywood;
    color: #0a0327;
  }
`;

const StImage = styled.div`
  align-items: center;
  width: 500px;
  height: 490px;
  border: none;
  background: transparent;
  border: 1px solid burlywood;
  border-radius: 5px;
`;
// const StImageSize = styled.image`
//   width: 100px;
//   height: 50px;
// `;

export default Post;
