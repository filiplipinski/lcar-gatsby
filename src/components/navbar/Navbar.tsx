import { Container } from 'components/container/Container';
import React from 'react';

import { Logo } from 'components/logo/Logo';

import * as S from './Navbar.styles';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <S.Wrapper>
        <Logo color="dark" />
      </S.Wrapper>
    </Container>
  );
};
