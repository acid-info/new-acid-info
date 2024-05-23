import PageTitle from '@/components/PageTitle/PageTitle'
import { ESortingType } from '@/components/SortDropdown'
import SortDropdown from '@/components/SortDropdown/SortDropdown'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { Dropdown, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  CTAButton,
  CreatedAt,
  GridContainer,
  GridItem,
  ImageContainer,
  Title,
} from './StyledComponents'

export type ArticleProps = {
  title: string
  thumbnail: string
  createdAt: string
  link: string
}

export type ArticlesPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  articles: ArticleProps[]
}

const DEFAULT_ARTICLES_COUNT = 12

export const ArticlesContainer: React.FC<ArticlesPageProps> = ({
  articles,
  ...props
}) => {
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_ARTICLES_COUNT)

  const [showSeeMore, setShowSeeMore] = useState(
    articles?.length > DEFAULT_ARTICLES_COUNT,
  )

  const handleSeeMoreClick = () => {
    const nextItemsToShow = itemsToShow + DEFAULT_ARTICLES_COUNT
    setItemsToShow((prev) => nextItemsToShow)

    if (nextItemsToShow >= articles.length) {
      setShowSeeMore(false)
    }
  }

  return (
    <Container {...props}>
      <PageTitle numberOfElements={articles?.length}>
        <Typography variant="h1">Articles</Typography>
      </PageTitle>
      <DropdownContainer>
        <SortDropdown sortBy={[ESortingType.DATE]} />
        <Dropdown
          value={'all'}
          options={[
            {
              name: 'All',
              value: 'all',
            },
          ]}
          size="medium"
        />
      </DropdownContainer>
      <GridContainer>
        {articles.slice(0, itemsToShow).map((article, index) => (
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
      {showSeeMore && (
        <CTAButton onClick={handleSeeMoreClick} size="large" variant="filled">
          See more
        </CTAButton>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${uiConfigs.navbarRenderedHeight}px);

  margin-top: 64px;

  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
    margin-top: 16px;
  }
`

const DropdownContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-right: auto;
  gap: 8px;

  @media (max-width: ${breakpoints.sm}px) {
    .lsd-dropdown--medium {
      width: calc(50vw - 14px);
    }
  }
`
