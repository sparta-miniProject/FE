import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ width = 300, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  const navigate = useNavigate();

  // button 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 닫기
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? (
            <StSpan>X</StSpan>
          ) : (
            <StSpan className={styles.openBtn}>☰</StSpan>
          )}
        </button>

        <div className={styles.content}>{children}</div>
        <div>
          <Button
            onClick={() => {
              navigate(`/post`);
            }}
          >
            <h2>글쓰기</h2>
          </Button>
          <Button
            onClick={() => {
              navigate(`/`);
            }}
          >
            <h2>홈으로</h2>
          </Button>
          <Button
            onClick={() => {
              navigate(`/main`);
            }}
          >
            <h2>메인으로</h2>
          </Button>
          <Button
            onClick={() => {
              navigate(`/lists`);
            }}
          >
            <h2>레시피 보러가기</h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

const StSpan = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.div`
  padding: 0em 2em;
  margin: 10px;
  color: #0a0327;
  border-radius: 20px;
  background-color: burlywood;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: #0a0327;
    color: burlywood;
  }
  z-index: 100;
`;

export default Sidebar;
