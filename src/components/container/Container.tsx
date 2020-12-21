import React from 'react';
import * as S from './Container.styles';

export const Container: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
