import React from 'react';

import { Logo } from 'components/logo/Logo';

import * as S from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.FlexContainer>
        <div>
          <p>Kontakt</p>

          <p>+48 539 943 336</p>
          <p>Pon. - Pt. 8-18</p>
        </div>

        <Logo color="light" />
      </S.FlexContainer>
      {/* <p>Lcar.pl 2020 Wszelkie prawa zastrzezone</p> */}
    </S.Wrapper>
  );
};
