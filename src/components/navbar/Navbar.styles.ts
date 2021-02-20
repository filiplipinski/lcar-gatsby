import { makeStyles } from '@material-ui/core';

// TODO: empty styles
export const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
  },
}));

// import styled from 'styled-components';
// import { theme } from 'theme';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: ${theme.layout.mobileNavbarHeight};
//   z-index: ${theme.zIndex.navbar};
//   background-color: ${theme.colors.common.white};

//   ${theme.mq.desktop} {
//     height: ${theme.layout.navbarHeight};
//     justify-content: flex-start;
//   }
// `;
