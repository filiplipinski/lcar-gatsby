import React from 'react';
import * as S from './Logo.styles';

type Props = {
  color: 'light' | 'dark';
};

export const Logo: React.FC<Props> = (props) => {
  return (
    <S.Logo color={props.color}>
      <span>
        LCAR<span className="dot">.</span>
      </span>{' '}
      <span>Auto Detailing</span>
    </S.Logo>
  );
};
