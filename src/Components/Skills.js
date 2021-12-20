import React from 'react';
import GlobalCards from './Cards/GlobalCards';
import html5Img from '../Assets/html5.jpg';
import css3Img from '../Assets/css3.jpg';
import jsImg from '../Assets/js.png';
import reactjsImg from '../Assets/reactjs.png';
import reactnativeImg from '../Assets/reactnative.jpg';
import nextImg from '../Assets/nextjs.png';
import redux from '../Assets/redux.png';
import bootstrap from '../Assets/bootstrap.png';
import materialui from '../Assets/Material.png';
import figma from '../Assets/figma.png';
import adobexd from '../Assets/XD.png';
import wp from '../Assets/wp.png';
import git from '../Assets/git.png';
import { Container } from './ContainerPagesStyled';
import Head from './Head';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();
  const skillsList = [
    {
      imagem: html5Img,
      titulo: 'HTML5',
    },
    {
      imagem: css3Img,
      titulo: 'CSS3',
    },
    {
      imagem: jsImg,
      titulo: 'JavaScript',
    },
    {
      imagem: reactjsImg,
      titulo: 'ReactJS',
    },
    {
      imagem: reactnativeImg,
      titulo: 'React Native',
    },
    {
      imagem: nextImg,
      titulo: 'NextJS',
    },
    {
      imagem: bootstrap,
      titulo: 'BootStrap',
    },
    {
      imagem: materialui,
      titulo: 'MaterialUI',
    },
    {
      imagem: figma,
      titulo: 'Figma',
    },
    {
      imagem: adobexd,
      titulo: 'AdobeXD',
    },
    {
      imagem: wp,
      titulo: 'WordPress',
    },
    {
      imagem: git,
      titulo: 'GIT',
    },
  ];

  return (
    <Container ref={containerSkills} onScroll={() => setScrollOn(!scrollOn)}>
      <Head title='Skills' />
      {skillsList.map((skill) => {
        return (
          <GlobalCards
            container={containerSkills}
            scrollOn={scrollOn}
            imagem={skill.imagem}
            titulo={skill.titulo}
            key={skill.titulo}
          />
        );
      })}
    </Container>
  );
}

export default Skills;
