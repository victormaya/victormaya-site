import styled from 'styled-components';

export const Container = styled.footer`
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  p {
    color: #ddd;
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
    opacity: 0.5;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
    position: relative;
    margin-left: calc(1rem + 5px);
  }
  .logo {
    background: linear-gradient(
      90deg,
      rgba(187, 50, 53, 1) 0%,
      rgba(255, 187, 17, 1) 50%
    );
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    opacity: 1;
    margin-left: 5px;
  }
`;
