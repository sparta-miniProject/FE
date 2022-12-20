import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    // dispatch(__getDiary());
  }, []);

  // 인풋 입력하고 추가버튼을 눌렀을 때 일어나는 일

  const onAddHandler = (e) => {
    // event.preventDefault();

    // 새로운 데이터가 추가되면 list를 만들고
    const newComment = {
      id: Math.floor(Math.random() * 100),
      title: title,
      contents: contents,
      is_edit: false,
      memo: [],
    };
    // dispatch(변화)를 발생시켜서 액션을 리듀서에 보낸다.
    // redux에서 __addDiary(액션)가 어떤 일을 하는지 명시해줘야함
    // dispatch(__addDiary(newComment));

    // input내용들 초기화 ("")빈값을 넣어줘

    setTitle("");

    setContents("");
  };

  return (
    <StDiv allbox>
      <Stleft>
        <h1>하이볼 레시피 공유!!</h1>
        <input type="box"></input>
        <div>
          <StButton onClick={() => navigate("/main")}>수정하기</StButton>
          <StButton onClick={() => navigate("/main")}>삭제하기</StButton>
        </div>
      </Stleft>
      <StDiv comments>
        <div>
          <h1>Comments</h1>
          <StButton onClick={() => navigate("/main")}>이전으로</StButton>
        </div>
        <br />
        <span>제목</span>
        <input type="box"></input>
        <StButton onClick={() => navigate("/main")}>수정</StButton>
        <StButton onClick={() => navigate("/main")}>삭제</StButton>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.comments &&
    css`
      float: right;
      display: flex;
      /* flex-direction: right; */
      justify-content: flex-start;
      align-items: center;
      border: solid;
      /* min-height: 82.5vh; */
      width: 500px;
      height: 400px;
    `}
  ${(props) =>
    ~props.allbox &&
    css`
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    `}
`;

const Stleft = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 82.5vh; */
  border: solid;
  width: 300px;
  height: 400px;
`;

const StButton = styled.button`
  background-color: transparent;
  box-shadow: 1px 1px 2px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export default Detail;
