import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { Container } from 'components/container/Container';
import * as S from 'styles/index.styles';

import { HeroImgQuery } from '../../graphql-types';

interface Props {
  data: HeroImgQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const bannerFluid = useMemo(() => {
    const foundImg = data.allFile.edges.find((edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner.jpg');
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  const bannerShadowFluid = useMemo(() => {
    const foundImg = data.allFile.edges.find((edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner-shadow.png');
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  return (
    <>
      <S.ImageWrapper>
        <S.TextBox>
          <div>
            1<S.Dot>.</S.Dot> <span>Profesjonalizm</span>
          </div>
          <div>
            2<S.Dot>.</S.Dot> <span>Staranność</span>
          </div>
          <div>
            3<S.Dot>.</S.Dot> <span>Dokładność</span>
          </div>
        </S.TextBox>

        <S.MainImg fluid={bannerFluid} />

        <S.Img fluid={bannerShadowFluid} />
      </S.ImageWrapper>

      <Container>{/* content here */}</Container>
    </>
  );
};

export const query = graphql`
  query HeroImg {
    allFile(filter: { name: { regex: "/banner/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
              originalName
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
