import styled, { keyframes } from "styled-components";

const scaling = keyframes`
    0% {
        transform: scale(0);
    } 
    50% {
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
`;

const AnimationContainer = styled.div``;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #fff;
  display: inline-block;
  margin: 0 0.5rem;
  animation: ${scaling} 1s ease-in-out backwards infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

const LoadingAnimation = () => {
  return (
    <AnimationContainer>
      <Circle />
      <Circle />
      <Circle />
    </AnimationContainer>
  );
};

export default LoadingAnimation;
