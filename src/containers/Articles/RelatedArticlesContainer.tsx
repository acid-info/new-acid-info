import { TitleContainer } from '@/components/PageTitle/PageTitle'
import { breakpoints } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArticleProps } from './ArticlesContainer'
import {
  CreatedAt,
  GridContainer,
  GridItem,
  ImageContainer,
  Title,
} from './StyledComponents'

export type RelatedArticlesPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  articles: ArticleProps[]
}

export const RelatedArticlesContainer: React.FC<RelatedArticlesPageProps> = ({
  articles,
  ...props
}) => {
  return (
    <Container {...props}>
      <TitleContainer>
        <Typography variant="h3">Related Articles</Typography>
        <Link href={'/articles'}>
          <Button size="small">See all</Button>
        </Link>
      </TitleContainer>
      <GridContainer>
        {articles.map((article, index) => (
          <GridItem key={index}>
            <CreatedAt variant="body2">
              {article.createdAt.substring(0, 10)}
            </CreatedAt>
            <Title variant="body2" component="h3">
              <Link href={article.link}>{article.title}</Link>
            </Title>
            <Link href={article.link}>
              <ImageContainer>
                <Image src={article.thumbnail} alt={article.title} fill />
              </ImageContainer>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  grid-column: 1 / 17;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 148px;

  @media (max-width: ${breakpoints.lg}px) {
    width: calc(100% - 20px);
    margin-inline: 10px;
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 116px;
  }
`
