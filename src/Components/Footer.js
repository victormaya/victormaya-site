import React from 'react';

import { Container } from './FooterStyled';

function Footer() {
  const date = new Date()
  return (
    <Container>
      <p>Victor Maya - {date.getFullYear()}</p>
      <div className='logo' />
    </Container>
  );
}

export default Footer;
