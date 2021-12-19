import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  background: #151515;
`;

export const Content = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  .perfil {
    width: 13rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    transition: box-shadow 0.3s ease;
  }

  .perfil:hover,
  .perfil:focus {
    box-shadow: 0px 0px 0px 5px #503b08, 0px 0px 0px 10px #fb1;
  }

  .textos {
    padding-left: 2rem;
    h1 {
      color: #fd1;
      font-size: 3rem;
      line-height: 2;
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
