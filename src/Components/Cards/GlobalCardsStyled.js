import styled from 'styled-components';

export const Container = styled.div`
  /* para animacao */
  opacity: 0;
  transform: translateX(20px);

  /* para animacao */

  background: #eeeeee1a;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.2s ease;
  .image {
    width: 6rem;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    margin-right: 1rem;
    img {
      background: #ddd;
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
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      bottom: -0.3rem;
      left: -0.4rem;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }
  &:hover {
    transform: scale(1.05);
    img {
      border-radius: 6px;
    }
    .image:after {
      border-radius: 4px;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    background-image: linear-gradient(
      90deg,
      rgba(187, 50, 53, 1) 0%,
      rgba(255, 187, 17, 1) 10%
    );
    background-clip: text;
    -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 1.125rem;
    color: #ddd;
    font-weight: bold;
    line-height: 2;
  }
  p {
    color: #ddd;
  }
  &:last-child {
    margin-bottom: 12rem;
  }
`;
