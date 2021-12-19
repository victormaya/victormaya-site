import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './HeaderStyled';

function Header() {
  return (
    <Container>
      <nav>
        <NavLink to='/' end>Skills</NavLink> |
        <NavLink to='portifolio'>Portifólio</NavLink> |
        <NavLink to='experiencia'>Experiência</NavLink> |
        <NavLink to='educacao'>Educacão</NavLink> |
        <NavLink to='contato'>Contato</NavLink>
      </nav>
    </Container>
  );
}

export default Header;
