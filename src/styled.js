import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  background: #151515;
`;

export const Content = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Oswald', sans-serif;
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
      background: #fb1;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      opacity: 0;
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
      color: #fd1;
      font-size: 3rem;
      line-height: 2;
      font-family: 'Passion One', cursive;
      text-transform: capitalize;
      background-image: radial-gradient(
        circle at 50% -3.03%,
        #ffcf00 0,
        #ffbc00 12.5%,
        #ffa800 25%,
        #ff9214 37.5%,
        #f37b1f 50%,
        #e36526 62.5%,
        #d4522b 75%,
        #c74130 87.5%,
        #bb3235 100%
      );

      background-clip: text;
      -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

      -webkit-text-fill-color: transparent;

      color: black;
    }
    p {
      color: #ddd;
      line-height: 1.3;
      font-size: 1.125rem;
    }
  }
  .animaLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animaLeft 0.3s forwards;
  }
  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
