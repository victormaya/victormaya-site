import React from 'react';

import { Container } from './GlobalCardsStyled';
import useAnimation from '../../Functions/useAnimation';

function GlobalCards({
  imagem,
  titulo,
  subtitulo,
  conteudo,
  container,
  scrollOn,
}) {
  const card = React.useRef();
  useAnimation(container, card, scrollOn);

  return (
    <Container ref={card}>
      <div className='image'>
        <img src={imagem} />
      </div>
      <div>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{conteudo}</p>
      </div>
    </Container>
  );
}

export default GlobalCards;
