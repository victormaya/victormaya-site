import React from 'react';
import GlobalCards from './Cards/GlobalCards';

import America from '../Assets/america.png';
import Stakato from '../Assets/stakato.png';
import PHOENIX from '../Assets/Phoenix.jpg';

import { Container } from './ContainerPagesStyled';
import Head from './Head';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();

  return (
    <Container ref={containerSkills} onScroll={() => setScrollOn(!scrollOn)}>
      <Head title='Portifólio' />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={America}
        titulo='América Burguer'
        // subtitulo='JUNHO - 2020 / DEZEMBRO - 2021'
        conteudo={
          <a href='http://americaburguer.surge.sh/' target='_blank'>
            Clique Aqui
          </a>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={Stakato}
        titulo='Academia de Música Stakato'
        // subtitulo='JUNHO - 2020 / DEZEMBRO - 2021'
        conteudo={
          <a href='http://academiastakato.surge.sh/' target='_blank'>
            Clique Aqui
          </a>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={PHOENIX}
        titulo='Phoenix App'
        conteudo={
          <a
            href='https://play.google.com/store/apps/details?id=com.phoenix.english.course'
            target='_blank'
          >
            Clique Aqui
          </a>
        }
      />
    </Container>
  );
}

export default Skills;
