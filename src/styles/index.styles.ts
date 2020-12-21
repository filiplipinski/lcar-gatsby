import styled from 'styled-components';
import { theme } from 'theme';
import GatsbyImg from 'gatsby-image';

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Img = styled(GatsbyImg)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 10%;

  color: ${theme.colors.common.white};
  font-size: 30px;

  div > span {
    font-size: 50px;
    line-height: 70px;
    font-weight: ${theme.font.weight.extraBold};
  }
`;

export const Dot = styled.span`
  color: ${theme.colors.red};
  font-size: 60px;
  line-height: 30px;
`;
