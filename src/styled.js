import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: calc(100vh - 4rem);
  background: #151515;
  overflow: hidden;
  @media (max-width: 970px) {
    grid-template-columns: 1fr;
    overflow: auto;
  }
  .animaLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animaLeft 0.5s forwards;
  }
  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  .visible {
    opacity: 1;
    transform: initial;
  }
`;

export const ContentLeft = styled.section`
  padding: 4rem 2rem;
  @media (max-width: 970px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  .perfil {
    width: 13rem;
    margin-bottom: 1rem;
    img {
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    &:after {
      content: '';
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(187, 50, 53, 1) 0%,
        rgba(255, 187, 17, 1) 50%
      );
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      opacity: 1;
      bottom: -0.4rem;
      left: -0.5rem;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }

  .perfil:hover,
  .perfil:focus {
    position: relative;
    img {
      z-index: 2;
      border-radius: 5px;
    }
    &:after {
      border-radius: 5px;
      opacity: 1;
    }
  }

  .textos {
    padding-left: 2rem;
    h1 {
      color: #fb1;
      font-size: 3rem;
      line-height: 2;
      font-family: 'Passion One', cursive;
      background-image: linear-gradient(
        90deg,
        rgba(187, 50, 53, 1) 0%,
        rgba(255, 187, 17, 1) 50%
      );
      background-clip: text;
      -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
      -webkit-text-fill-color: transparent;
    }
    p {
      color: #ddd;
      line-height: 1.3;
      font-size: 1.125rem;
    }
  }
`;
export const ContentRight = styled.section`
  padding: 4rem 2rem;
  @media (max-width: 970px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;
