import styled from 'styled-components';

export const Container = styled.header`
  color: rgb(255, 187, 17, 0.5);
  nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  a {
    color: #ddd;
    font-size: 1.375rem;
    position: relative;
    z-index: 1;
    font-weight: bold;
  }
  .active {
    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      background: rgba(255, 187, 17, 0.5);
      position: absolute;
      border-radius: 50%;
      bottom: -0.1rem;
      left: -0.2rem;
      z-index: -1;
      opacity: 0;
      animation: surgeMark 0.3s forwards;
    }
    @keyframes surgeMark {
      to {
        border-radius: 4px;
        opacity: initial;
      }
    }
  }
`;
