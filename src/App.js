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
          <h1>OI, SOU VICTOR MAYA.</h1>
          <p>
            Tenho 24 anos, maranhense, graduado em Ciência e Tecnologia(UFMA),
            graduando em Engenharia da Computação(UFMA). Sou desenvolvedor
            front-end com 2 anos de experiência. Trabalho com JavaScript,
            lidando diariamente com ReactJs e Native. Sou apaixonado por
            tecnologia, viagens e música. Vivo entre o analógico e o digital.
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
        </BrowserRouter>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
