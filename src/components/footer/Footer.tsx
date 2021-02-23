import React from 'react';

import * as S from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.FlexContainer>
          <div>
            <S.Title>Kontakt</S.Title>

            <p style={{ textAlign: 'center' }}>
              <S.Red>+48</S.Red> 539 943 336 <br />
              Pon.-Pt. 8-18
            </p>
          </div>

          <div>
            <S.Title>Email</S.Title>
            <p>
              <S.Red>karol.lipinski</S.Red>@lcar.pl
            </p>
          </div>

          <div>
            <S.Title>Adres</S.Title>
            <strong>Karol Lipiński</strong>
            <p>
              ul. <S.Red>Złota 48</S.Red> <br /> 26-604 Radom
            </p>
          </div>

          {/* logo here */}
        </S.FlexContainer>

        <S.Rights>
          <S.Bold>
            <S.Red>LCAR.PL</S.Red> ® 2020
          </S.Bold>{' '}
          Wszelkie prawa zastrzeżone
          <div>
            <i style={{ fontSize: '12px' }}>Strona w budowie</i>
          </div>
        </S.Rights>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};
