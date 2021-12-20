import React from 'react';
import GlobalCards from './Cards/GlobalCards';

import wpp from '../Assets/wpp.jpeg';
import gmail from '../Assets/gmail.png';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/GitHub.jpg';

import { Container } from './ContainerPagesStyled';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();

  return (
    <Container ref={containerSkills} onScroll={() => setScrollOn(!scrollOn)}>
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={wpp}
        titulo='Whatsapp'
        subtitulo='(99) 9 8275-6405'
        conteudo={
          <a
            href='https://api.whatsapp.com/send?phone=5599982756405'
            target='_blank'
          >
            Clique Aqui
          </a>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={gmail}
        titulo='E-mail'
        subtitulo='victor.maya42@gmail.com'
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={github}
        titulo='GitHub'
        subtitulo='@victormaya'
        conteudo={
          <a href='https://github.com/victormaya' target='_blank'>
            Clique Aqui
          </a>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={linkedin}
        titulo='LinkedIn'
        subtitulo='@victor-maya'
        conteudo={
          <a href='https://www.linkedin.com/in/victor-maya/' target='_blank'>
            Clique Aqui
          </a>
        }
      />
    </Container>
  );
}

export default Skills;
