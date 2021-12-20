import styled from 'styled-components';

export const Container = styled.header`
  /* color: rgb(255, 187, 17, 0.5); */
  color: #fb1;
  nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  a {
    color: #ddd;
    font-size: 1.375rem;
    position: relative;
    font-weight: bold;
    z-index: 1;
  }
  .active {
    z-index: 1;
    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      background: linear-gradient(
        90deg,
        rgba(187, 50, 53, 1) 0%,
        rgba(255, 187, 17, 1) 50%
      );
      position: absolute;
      border-radius: 50%;
      bottom: -5px;
      left: -5px;
      animation: surgeMark 1s forwards;
      z-index: -1;
      opacity: 0.7;
    }
    @keyframes surgeMark {
      to {
        border-radius: 3px;
      }
    }
  }
`;
