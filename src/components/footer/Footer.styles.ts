import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.common.white};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
