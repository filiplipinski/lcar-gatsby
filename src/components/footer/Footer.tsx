import React, { useCallback, useMemo } from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery } from '@material-ui/core';
import { Facebook, YouTube, ExpandLess, Phone } from '@material-ui/icons';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from 'components/container/Container';

import { useStyles } from './Footer.styles';

export const query = graphql`
  query LogoWhiteImg {
    file(name: { eq: "logo-white" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const Footer: React.FC = () => {
  const styles = useStyles();
  const logoImgData = useStaticQuery<GatsbyTypes.LogoWhiteImgQuery>(query);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const logoFluid = useMemo(() => logoImgData.file?.childImageSharp?.fluid, [logoImgData]);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!isTablet) {
    return (
      <div className={styles.container}>
        <Container className={styles.flexContainer}>
          <Typography variant="h4" color="secondary" className={styles.title}>
            Media
          </Typography>

          <Box display="flex">
            <Link
              href="https://www.facebook.com/Lcar-105024021544930"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={styles.facebookIcon} />
            </Link>

            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTube className={styles.youtubeIcon} />
            </Link>
          </Box>

          <ExpandLess onClick={handleClick} color="secondary" className={styles.expandLessIcon} />

          <div role="presentation" onClick={handleClick} className={styles.logoContainer}>
            {logoFluid && <Img fluid={logoFluid} alt="lcar logo" className={styles.logo} />}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Container className={styles.flexContainer}>
        <div>
          <Typography variant="h4" color="secondary" className={styles.title}>
            Media
          </Typography>

          {/* -8px cause of svg fake padding */}
          <Box display="flex" ml="-8px">
            <Link
              href="https://www.facebook.com/Lcar-105024021544930"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={styles.facebookIcon} />
            </Link>

            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTube className={styles.youtubeIcon} />
            </Link>
          </Box>
        </div>

        <div>
          <Typography variant="h4" color="secondary" className={styles.title}>
            Kontakt
          </Typography>

          {/* -56px = phoneIcon size + it's marginRight */}
          <Box display="flex" alignItems="center" ml="-56px">
            <Phone className={styles.phoneIcon} />

            <div>
              <Typography variant="h4" color="secondary" component="a" href="tel:+48539943336">
                <Typography variant="h4" component="span" color="textPrimary">
                  +48
                </Typography>{' '}
                539 943 336
              </Typography>
              <Typography color="secondary">Pon.-Pt. 8-18</Typography>
            </div>
          </Box>
        </div>

        <Box onClick={handleClick} alignSelf="center" className={styles.logoContainer}>
          {logoFluid && <Img fluid={logoFluid} alt="lcar logo" className={styles.logo} />}
        </Box>
      </Container>

      <Typography color="secondary" align="center" className={styles.rights}>
        <span>
          <Typography component="span" color="textPrimary">
            LCAR.PL
          </Typography>{' '}
          ® 2021
        </span>{' '}
        Wszelkie prawa zastrzeżone
      </Typography>

      <Typography variant="caption" component="p" color="secondary" align="center">
        site by{' '}
        <Link
          color="secondary"
          href="https://github.com/filiplipinski"
          target="_blank"
          rel="noopener noreferrer"
        >
          @filiplipinski
        </Link>
      </Typography>
    </div>
  );
};

// TODO: remove code
// <div className={styles.container}>
//   <Container>
//     <div className={styles.innerWrapper}>
//       <div className={styles.flexContainer}>
//         <div>
//           <Typography variant="h3">Kontakt</Typography>
//           <Typography>
//             <Typography component="span" color="secondary">
//               +48
//             </Typography>{' '}
//             539 943 336 <br />
//             Pon.-Pt. 8-18
//           </Typography>
//         </div>

//         <div>
//           <Typography variant="h3">Email</Typography>

//           <Typography>
//             <Typography component="span" color="secondary">
//               karol.lipinski
//             </Typography>
//             @lcar.pl
//           </Typography>
//         </div>

//         <div>
//           <Typography variant="h3">Adres</Typography>

//           <Typography component="strong">Karol Lipiński</Typography>

//           <Typography>
//             ul.{' '}
//             <Typography component="span" color="secondary">
//               Złota 48
//             </Typography>{' '}
//             <br /> 26-604 Radom
//           </Typography>
//         </div>
//       </div>

//       <div className={styles.rights}>
//         <Typography component="strong">
//           <Typography component="span" color="secondary">
//             LCAR.PL
//           </Typography>{' '}
//           ® 2020
//           <i style={{ fontSize: '12px', display: 'block' }}>Strona w budowie</i>
//         </Typography>
//       </div>
//     </div>
//   </Container>
// </div>
