import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HeroImageQuery } from '../../graphql-types';
import * as S from 'styles/index.styles';

interface Props {
  data: HeroImageQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const heroImgFluid = data.file?.childImageSharp?.fluid;
  return (
    <S.Wrapper>
      <p>hello tu index</p>
      {heroImgFluid && (
        <S.ImageWrapper>
          <Img fluid={heroImgFluid} />
        </S.ImageWrapper>
      )}
    </S.Wrapper>
  );
};

export const query = graphql`
  query HeroImage {
    file(name: { regex: "/hero/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
