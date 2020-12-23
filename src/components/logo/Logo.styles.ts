import styled from 'styled-components';
import { theme } from 'theme';

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 36px;
    font-weight: 800;

    .dot {
      color: ${theme.colors.red};
      font-size: 70px;
      line-height: 36px;
    }

    text-transform: uppercase;
    color: ${({ color }) => (color === 'light' ? theme.colors.common.white : theme.colors.text.primary)};
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 400;

    padding-top: 14px;
    padding-left: 8px;
  }
`;
