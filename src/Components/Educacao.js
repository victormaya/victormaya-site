import React from 'react';
import GlobalCards from './Cards/GlobalCards';

import UFMA from '../Assets/UFMA.jpg';

import { Container } from './ContainerPagesStyled';
import Head from './Head';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();

  return (
    <Container ref={containerSkills} onScroll={() => setScrollOn(!scrollOn)}>
      <Head title='Educação' />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={UFMA}
        titulo='Bel. em Ciência e Tecnologia'
        subtitulo='Universidade Federal do Maranhão'
        conteudo='2015 - 2020'
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={UFMA}
        titulo='Engenharia da Computação'
        subtitulo='Universidade Federal do Maranhão'
        conteudo='2020 - ATUAL'
      />
    </Container>
  );
}

export default Skills;
