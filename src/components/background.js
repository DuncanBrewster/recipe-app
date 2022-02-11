import styled, { keyframes } from 'styled-components';


const MovingGradient = keyframes`
  from {background-position: 0;}
  to {background-position: 100%;}
`;


export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    -45deg,
    hsl(222, 6%, 32%),
    hsl(148, 17%, 37%),
    hsl(139, 35%, 47%),
    hsl(0, 0%, 81%)
  );
  background-size: 400%;
  animation: ${MovingGradient} 15s ease infinite alternate;
  position: fixed;
  z-index: -1;
`;