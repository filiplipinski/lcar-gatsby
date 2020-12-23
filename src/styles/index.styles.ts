import styled from 'styled-components';
import { theme } from 'theme';
import GatsbyImg from 'gatsby-image';

export const ImageWrapper = styled.div`
  position: relative;
  height: 50vh;

  ${theme.mq.tablet} {
    height: 60vh;
  }
`;

export const MainImg = styled(GatsbyImg)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const Img = styled(GatsbyImg)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 10%;

  color: ${theme.colors.common.white};
  font-size: 20px;

  ${theme.mq.tablet} {
    font-size: 30px;
  }

  /* cyferka */
  div {
    margin-bottom: 10px;

    ${theme.mq.tablet} {
      margin-bottom: 20px;
    }
    ${theme.mq.desktop} {
      margin-bottom: 35px;
    }
  }

  /* duzy tekst */
  div > span {
    font-size: 35px;
    line-height: 30px;
    font-weight: ${theme.font.weight.extraBold};

    ${theme.mq.tablet} {
      font-size: 50px;
    }

    ${theme.mq.desktop} {
      font-size: 55px;
    }
  }
`;

export const Dot = styled.span`
  color: ${theme.colors.red};
  font-size: 60px;
  line-height: 30px;
`;
