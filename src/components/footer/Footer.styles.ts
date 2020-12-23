import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  margin-top: -1px;
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.common.white};
`;

export const InnerWrapper = styled.div`
  padding: ${`${theme.spacing[4]} ${theme.spacing[2]}`};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: ${`${theme.spacing[3]} 0 ${theme.spacing[1]}`};
`;

export const Red = styled.span`
  color: ${theme.colors.red};
`;
export const Bold = styled.span`
  font-weight: bold;
`;

export const Rights = styled.div`
  display: none;

  ${theme.mq.tablet} {
    display: block;
    text-align: center;
    margin-top: ${theme.spacing[3]};
  }
`;
