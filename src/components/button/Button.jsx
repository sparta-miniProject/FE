import styled, { css } from "styled-components";

const Button = (props) => {
  const {
    onClick,
    children,
    borderColor,
    add,
    back,
    view,
    post,
    recipedel,
    recipefix,
    recipeback,
    addComment,
    commentdel,
    home,
  } = props;
  return (
    <StButton
      home={home}
      add={add}
      back={back}
      view={view}
      post={post}
      recipedel={recipedel}
      recipefix={recipefix}
      recipeback={recipeback}
      borderColor={borderColor}
      addComment={addComment}
      commentdel={commentdel}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
};

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.home &&
    css`
      padding: 10px 30px;
      font-size: 20px;
      border-radius: 20px;
      background-color: #7ec1e0;
      border: 0;
      color: black;
      font-weight: bold;
      transition: background-color 0.3s;
      &:hover {
        background-color: #d3e2e9;
        box-shadow: 1px 1px 4px 0px gray;
      }
    `}
  ${(props) =>
    props.add &&
    css`
      background-color: #4ea1ba;
      width: 180px;
      height: 40px;
      border-radius: 10px;
      border: 0;
      font-size: 20px;
      margin: 20px;
      margin-top: 30px;
      transition: background-color 0.2s;
      &:hover {
        background-color: #89c9dd;
      }
    `}
  ${(props) =>
    props.back &&
    css`
      width: 180px;
      height: 40px;
      border-radius: 10px;
      border: 0;
      font-size: 20px;
      margin: 20px;
      margin-top: 30px;
      background-color: #b9c6cb;
      transition: background-color 0.2s;
      &:hover {
        background-color: #d9e1e4;
      }
    `}
  ${(props) =>
    props.view &&
    css`
      padding: 10px;
      background-color: transparent;
      border: none;
      transition: 0.2s;
      /* margin-bottom: 0.5rem; */
      border-radius: 30px;
      margin-bottom: 15px;
      &:hover {
        background: rgba(14, 15, 16, 0.1);
        transform: scale();
      }
      font-weight: bold;
      color: #056683;
    `}
    ${(props) =>
    props.post &&
    css`
      width: 100px;
      height: 30px;
      background-color: #056683;
      color: white;
      border: 0px;
      border-radius: 30px;
      box-shadow: 0 2px 5px rgba(42, 52, 75, 0.658);
      font-weight: bold;
      transition: background-color 0.3s;
      &:hover {
        background: rgba(184, 217, 254, 0.366);
        transform: scale();
        cursor: pointer;
        color: #056683;
        font-weight: bold;
      }
      font-family: "Nanum Gothic", sans-serif;
    `}
    ${(props) =>
    props.recipedel &&
    css`
      border: 1px solid ${({ borderColor }) => borderColor};
      height: 40px;
      width: 120px;
      background-color: transparent;
      color: #056683;
      border-radius: 12px;
      margin-left: 10px;
      transition: background-color 0.2s;
      font-weight: bold;
      &:hover {
        background-color: #1195bd;
        color: white;
      }
    `}
    ${(props) =>
    props.recipefix &&
    css`
      border: 1px solid ${({ borderColor }) => borderColor};
      height: 40px;
      width: 120px;
      background-color: #1195bd;
      color: white;
      border-radius: 12px;
      transition: background-color 0.2s;
      font-weight: bold;
      &:hover {
        background-color: white;
        color: #1195bd;
      }
    `}
    ${(props) =>
    props.recipeback &&
    css`
      border: 1px solid ${({ borderColor }) => borderColor};
      height: 40px;
      width: 120px;
      background-color: #b9c6cb;
      border-radius: 12px;
      transition: background-color 0.3s;
      /* font-weight: bold; */
      &:hover {
        background-color: #dae1e3;
      }
    `}
    ${(props) =>
    props.addPost &&
    css`
      html {
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(#141e30, #243b55);
      }

      .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
      }

      .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
      }

      .login-box .user-box {
        position: relative;
      }

      .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      .login-box .user-box label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }

      .login-box .user-box input:focus ~ label,
      .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
      }

      .login-box form a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        margin-top: 40px;
        letter-spacing: 4px;
      }

      .login-box a:hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
          0 0 100px #03e9f4;
      }

      .login-box a span {
        position: absolute;
        display: block;
      }

      .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }

      .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: 0.25s;
      }

      

      .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: 0.5s;
      }

      

      .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: 0.75s;
      }

      
    `}
`;

export default Button;
