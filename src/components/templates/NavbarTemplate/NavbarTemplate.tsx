import React from 'react';
import * as S from './NavbarTemplate.styles';

const NavbarTemplate: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <span>
          LCAR<span className="dot">.</span>
        </span>
        {' '}
        <span>Auto Detailing</span>
      </S.Logo>
    </S.Wrapper>
  );
};

export default NavbarTemplate;
