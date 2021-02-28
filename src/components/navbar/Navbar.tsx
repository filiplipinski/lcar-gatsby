import React, { useMemo, useState, useCallback } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, MenuList, Hidden } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from 'components/container/Container';

import { navigationHeight, useStyles } from './Navbar.styles';

export const query = graphql`
  query LogoImg {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const Navbar = () => {
  const styles = useStyles();
  const logoImgData = useStaticQuery<GatsbyTypes.LogoImgQuery>(query);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const logoFluid = useMemo(() => logoImgData.file?.childImageSharp?.fluid, [logoImgData]);

  const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);

  const handleClick = useCallback(
    (elementId: string) => {
      const topOfElement = (document.getElementById(elementId)?.offsetTop || 0) - navigationHeight;
      window.scroll({ top: topOfElement, behavior: 'smooth' });

      handleClose();
    },
    [handleClose],
  );

  return (
    <AppBar className={styles.appbar}>
      <Toolbar>
        <Container className={styles.container}>
          <Hidden smUp>
            <IconButton
              onClick={(e) => setAnchorEl(e.currentTarget)}
              edge="start"
              className={styles.menuButton}
              aria-label="menu"
            >
              <MoreVert className={styles.moreIcon} />
            </IconButton>
          </Hidden>

          <div
            role="presentation"
            onClick={() => handleClick('start')}
            className={styles.logoContainer}
          >
            {logoFluid && <Img fluid={logoFluid} alt="lcar logo" className={styles.logo} />}
          </div>

          <Hidden xsDown>
            <MenuList className={styles.navList}>
              <MenuItem onClick={() => handleClick('start')}>Start</MenuItem>
              <MenuItem onClick={() => handleClick('about-company')}>O firmie</MenuItem>
              <MenuItem onClick={() => handleClick('company-offer')}>Usługi</MenuItem>
              <MenuItem onClick={() => handleClick('realizations')}>Realizacje</MenuItem>
            </MenuList>
          </Hidden>
        </Container>

        <Hidden smUp>
          <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}>
            <MenuItem onClick={() => handleClick('start')}>Start</MenuItem>
            <MenuItem onClick={() => handleClick('about-company')}>O firmie</MenuItem>
            <MenuItem onClick={() => handleClick('company-offer')}>Usługi</MenuItem>
            <MenuItem onClick={() => handleClick('realizations')}>Realizacje</MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
