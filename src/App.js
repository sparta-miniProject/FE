import styled from "styled-components";
import Router from "./shared/Router";
// import Slider from "react-slick";
function App() {
  return (
    <div>
      <GlobalStyle>
        <Router />
      </GlobalStyle>
    </div>
  );
}
const GlobalStyle = styled.div`
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 100%;
    }
  }
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;

export default App;
