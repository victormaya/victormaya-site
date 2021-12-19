import React from 'react';
import { Container, Content } from './styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SobreMim from './Components/SobreMim';
import Page404 from './Components/Page404';
import Skills from './Components/Skills';
import Portifolio from './Components/Portifolio';
import Experiencia from './Components/Experiencia';
import Educacao from './Components/Educacao';
import Contato from './Components/Contato';
import perfil from './Assets/perfil.jpeg';

const App = () => {
  return (
    <Container>
      <Content>
        <div className='perfil animaLeft'>
          <img src={perfil} alt='Foto de Perfil' />
        </div>
        <div className='textos animaLeft'>
          <h1>Oi, sou Victor Maya.</h1>
          <p>
            Tenho 24 anos, graduado em Ciência e Tecnologia(UFMA) e maranhense.
            Iniciei meus estudos de Front-End em 2020 durante a pandemia do novo
            corona vírus e desde então venho me dedicando diariamente aos
            estudos. Sou apaixonado por UX/UI design e gosto de me manter
            atualizado sobre novidades de tecnologias em geral.
          </p>
        </div>
      </Content>
      <Content>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Skills />} />
            <Route path='portifolio' element={<Portifolio />} />
            <Route path='experiencia' element={<Experiencia />} />
            <Route path='educacao' element={<Educacao />} />
            <Route path='contato' element={<Contato />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Content>
    </Container>
  );
};

export default App;
