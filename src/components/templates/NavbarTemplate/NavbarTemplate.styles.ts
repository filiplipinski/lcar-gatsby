import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${theme.layout.mobileNavbarHeight};
  z-index: ${theme.zIndex.navbar};
  background-color: ${theme.colors.common.white};

  ${theme.mq.desktop} {
    height: ${theme.layout.navbarHeight};
    justify-content: flex-start;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 36px;
    font-weight: 800;

    .dot {
      color: red;
      font-size: 70px;
      line-height: 36px;
    }

    text-transform: uppercase;
    color: ${theme.colors.text.primary};
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 400;

    padding-top: 14px;
    padding-left: 8px;
  }
`;
