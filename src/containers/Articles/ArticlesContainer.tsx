import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { Button, Dropdown, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'

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
  const [sortBy, setSortBy] = useState('new-to-old')

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
      <TitleContainer>
        <Typography variant="h1">Articles</Typography>
        <MediaCount>{articles?.length}</MediaCount>
      </TitleContainer>
      <DropdownContainer>
        <Dropdown
          value={sortBy}
          onChange={(value) => setSortBy(value as string)}
          options={[
            {
              name: 'Old to New',
              value: 'old-to-new',
            },
            {
              name: 'New to Old',
              value: 'new-to-old',
            },
          ]}
          size="medium"
        />
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
            <Title variant="body2" component="a" href={article.link}>
              {article.title}
            </Title>
            <ImageContainer>
              <Image src={article.thumbnail} alt={article.title} fill />
            </ImageContainer>
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

const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  margin-bottom: 76px;
`

const GridContainer = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CTAButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`

const MediaCount = styled.div`
  display: flex;
  width: 40px;
  height: 28px;

  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;

  background-color: rgb(var(--lsd-theme-primary));
  color: white;
  border-radius: 22px;
`

const ImageContainer = styled.div`
  aspect-ratio: 296 / 197;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`

const Title = styled(Typography)`
  height: 80px;
`

const CreatedAt = styled(Typography)`
  text-align: center;
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
