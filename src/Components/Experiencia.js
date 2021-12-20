import React from 'react';
import GlobalCards from './Cards/GlobalCards';

import UNASUS from '../Assets/unasus.png';
import PHOENIX from '../Assets/Phoenix.jpg';
import USP from '../Assets/usp.png';

import { Container } from './ContainerPagesStyled';

function Skills() {
  const [scrollOn, setScrollOn] = React.useState(false);
  const containerSkills = React.useRef();

  return (
    <Container ref={containerSkills} onScroll={() => setScrollOn(!scrollOn)}>
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={UNASUS}
        titulo='UNA-SUS UFMA'
        subtitulo='JUNHO - 2020 / DEZEMBRO - 2021'
        conteudo={
          <>
            Como front-end, desenvolvi infográficos interativos em ReactJS para
            alunos da área da saúde, que podem ser exibidos em qualquer
            dispositivo, desde smartphones a televisores. <br />
            Fui um dos responsáveis pela implementação do modelo padrão do
            infográfico, que otimizou o processo de construção de novos
            conteúdos. <br />
            Fui o responsável pela construção da acessibilidade, implementando o
            modo de alto contraste, a navegação pelo teclado, a mudança de
            altura de fontes e o leitor de tela
          </>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={PHOENIX}
        titulo='Phoenix App'
        subtitulo='OUTUBRO - 2020 / OUTUBRO - 2021'
        conteudo={
          <>
            Durante 1 ano fui O front-end responsável pelo desenvolvimento de um
            app em React Native para a escola de Inglês Phoenix de Pedreiras-MA.
            Fui o principal responsável pelo UI/UX do aplicativo e por toda a
            programação front-end.
            <br />
            <br />
            Neste app foi implementado: <br />
            <br />- Music player para que os alunos ouvissem áudios em inglês;{' '}
            <br />
            <br />- Leitor de livros que marca, inclusive, a última pagina lida;{' '}
            <br />
            <br />- Sessão de posts para que os professores coloquem textos com
            curiosidades para os alunos treinarem seu inglês; <br />
            <br />- Sessão de vídeos para cada professor adicionar suas aulas;
            <br />
            <br />- Gestão de contratos: alunos que concluem o curso ganham um
            ano de uso do app, já alunos que desistem têm seu acesso cancelado.
            Para alimentar o app foi criado um dashboard em ReactJS onde somente
            o admin e os professores têm acesso.
          </>
        }
      />
      <GlobalCards
        container={containerSkills}
        scrollOn={scrollOn}
        imagem={USP}
        titulo='USPX - USP'
        subtitulo='JUNHO - 2021 / Atual'
        conteudo={
          <>
            Estou realizando a implementação front-end do portal USPX, onde é
            utilizado Next.js. O site permite a visualização de noticias,
            cursos, e webinários. Além de ser inteiramente responsivo, o site
            conta com uma estrutura de acessibilidade, contendo modo de alto
            contraste, navegação pelo teclado, e mudança de altura de fontes.
            <br />O site pode ser visualizado em três línguas: português,
            espanhol e inglês.
          </>
        }
      />
    </Container>
  );
}

export default Skills;
