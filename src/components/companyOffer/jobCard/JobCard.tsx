import React, { useMemo } from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { useStyles } from './JobCard.styles';
import { JobCardProps } from './JobCard.types';

export const query = graphql`
  query JobPlaceholderImg {
    file(name: { eq: "job-placeholder" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 80) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const JobCard = ({ title, description, isDesktop = false }: JobCardProps) => {
  const styles = useStyles();
  const imgData = useStaticQuery<GatsbyTypes.JobPlaceholderImgQuery>(query);
  const imgFluid = useMemo(() => imgData.file?.childImageSharp?.fluid, [imgData]);

  if (!isDesktop) {
    return (
      <Card className={styles.root}>
        <CardActionArea>
          <div>{imgFluid && <Img fluid={imgFluid} alt="job" className={styles.img} />}</div>
          <CardContent>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="h4"
              component="h2"
              className={styles.title}
            >
              {title}
            </Typography>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button color="primary">Więcej</Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card className={styles.desktopRoot}>
      <CardActionArea className={styles.actionAreaDesktop}>
        <CardContent>
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h4"
            component="h2"
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button component="div" disableTouchRipple color="primary">
            Więcej
          </Button>
        </CardActions>
      </CardActionArea>

      <div>{imgFluid && <Img fluid={imgFluid} alt="job" className={styles.desktopImg} />}</div>
    </Card>
  );
};
