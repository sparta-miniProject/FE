import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "react-slick";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { starlight } from "../assets";

// import img1 from "./img/1.png";
// import img2 from "./img/2.png";
// import img3 from "./img/3.png";
const navigate = useNavigate;
const TOTAL_SLIDES = 4; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const slideRef = useRef(null);
  const slideRef2 = useRef(null);
  const slideRef3 = useRef(null);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const NextSlide2 = () => {
    if (currentSlide2 >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide2(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide2(currentSlide2 + 1);
    }
  };
  const NextSlide3 = () => {
    if (currentSlide3 >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide3(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide3(currentSlide3 + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const PrevSlide2 = () => {
    if (currentSlide2 === 0) {
      setCurrentSlide2(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide2(currentSlide2 - 1);
    }
  };
  const PrevSlide3 = () => {
    if (currentSlide3 === 0) {
      setCurrentSlide3(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide3(currentSlide3 - 1);
    }
  }; // slideRef= 기능실행함수 , currentSlide = 사진

  useEffect(() => {
    const setTime = setInterval(
      () =>
        setCurrentSlide((currentValue) => {
          console.log(currentValue, currentSlide);
          if (currentSlide < 4) {
            return currentSlide + 1;
          } else {
            return 0;
          }
        }),
      3000
    );
    return () => clearInterval(setTime);
  });

  useEffect(() => {
    const setTime2 = setInterval(
      () =>
        setCurrentSlide2((currentValue) => {
          console.log(currentValue, currentSlide2);
          if (currentSlide2 < 4) {
            return currentSlide2 + 1;
          } else {
            return 0;
          }
        }),
      3000
    );
    return () => clearInterval(setTime2);
  });
  //ㅁㄴㅇㅁㄴㅇㅁㄴㅇ
  useEffect(() => {
    const setTime3 = setInterval(
      () =>
        setCurrentSlide3((currentValue) => {
          console.log(currentValue, currentSlide3);
          if (currentSlide3 < 4) {
            return currentSlide3 + 1;
          } else {
            return 0;
          }
        }),
      3000
    );
    return () => clearInterval(setTime3);
  });

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    console.log(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    slideRef2.current.style.transition = "all 0.5s ease-in-out";
    slideRef2.current.style.transform = `translateX(-${currentSlide2}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide2]);

  useEffect(() => {
    slideRef3.current.style.transition = "all 0.5s ease-in-out";
    slideRef3.current.style.transform = `translateX(-${currentSlide3}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide3]);
  // <Lottie className="starlight" animationData={starlight} />;
  return (
    <div>
      <div>
        <Container>
          <Text>
            <h1>소주</h1>
            <p>{currentSlide + 1}위&nbsp;&nbsp;소주</p>
            <AddWatch
              onClick={() => {
                navigate(`/`); // [id].배열 보내기
              }}
            >
              더 보기
            </AddWatch>
          </Text>
          <SliderContainer id="testbutton" ref={slideRef}>
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
          </SliderContainer>
          <Center>
            <Button onClick={PrevSlide}>Prev</Button>
            <Button onClick={NextSlide}>Next</Button>
          </Center>
        </Container>
      </div>
      <div>
        <Container>
          <Text>
            <h1>황금비율</h1>
            <p>{currentSlide2 + 1}위 황금비율</p>
            <AddWatch
              onClick={() => {
                navigate(`/`); // [id].배열 보내기
              }}
            >
              더 보기
            </AddWatch>
          </Text>
          <SliderContainer ref={slideRef2}>
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
          </SliderContainer>
          <Center>
            <Button onClick={PrevSlide2}>Prev</Button>
            <Button onClick={NextSlide2}>Next</Button>
          </Center>
        </Container>
      </div>
      <div>
        <Container>
          <Text>
            <h1>안주</h1>
            <p>{currentSlide3 + 1}위 &nbsp;안주</p>
            <AddWatch
              onClick={() => {
                navigate(`/`); // [id].배열 보내기
              }}
            >
              더 보기
            </AddWatch>
          </Text>
          <SliderContainer ref={slideRef3}>
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
            <StImg src="https://www.theguru.co.kr/data/photos/20200833/art_15973193952929_c65bed.jpg" />
          </SliderContainer>
          <Center>
            <Button onClick={PrevSlide3}>Prev</Button>
            <Button onClick={NextSlide3}>Next</Button>
          </Center>
        </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  opacity: 1;
  width: 520px;
  margin: auto;
  height: 770px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 15px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const AddWatch = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 30px;
  border: 3px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Text = styled.div`
  padding-left: 20px;
  justify-content: space-between;
  text-align: center;
  color: burlywood;
  p {
    color: #fff;
    font-size: 20px;
    background-color: burlywood;
    display: inline-block;
    border-radius: 50px;
    padding: 0.8em 1em;
  }
`;
const Center = styled.div`
  text-align: center;
`;
const StImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50px;
  border: 3px solid burlywood;
  padding-left: 14.5px;
`;
// const StDetailbutton = styled.button`
//   all: unset;
//   padding: 1em 2em;
//   margin: 2em 2em;
//   color: burlywood;
//   border-radius: 30px;
//   border: 3px solid burlywood;
//   cursor: pointer;
//   &:hover {
//     background-color: burlywood;
//     color: #fff;
//   }

// `;
