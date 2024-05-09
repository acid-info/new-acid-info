import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import useWindowSize from '../../../hooks/useWindowSize'

export type MediaPhotoProps = {
  src: string
  width: number
  height: number
  title?: string
}

export type MediaPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  photos: MediaPhotoProps[]
}

const DEFAULT_PHOTO_COUNT = 12

export const MediaContainer: React.FC<MediaPageProps> = ({
  photos,
  ...props
}) => {
  const { width } = useWindowSize()
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_PHOTO_COUNT)

  const [showSeeMore, setShowSeeMore] = useState(
    photos.length > DEFAULT_PHOTO_COUNT,
  )

  const handleSeeMoreClick = () => {
    const nextItemsToShow = itemsToShow + DEFAULT_PHOTO_COUNT
    setItemsToShow((prev) => nextItemsToShow)

    if (nextItemsToShow >= photos.length) {
      setShowSeeMore(false)
    }
  }

  return (
    <Container {...props}>
      <TitleContainer>
        <Typography variant="h1">Media</Typography>
        <MediaCount>{photos?.length}</MediaCount>
      </TitleContainer>
      <GalleryContainer>
        <PhotoAlbum
          layout="masonry"
          columns={width > breakpoints.md ? 4 : 2}
          photos={photos.slice(0, itemsToShow)}
          spacing={width > breakpoints.md ? 16 : 8}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <GalleryItem style={{ position: 'relative', ...wrapperStyle }}>
              {renderDefaultPhoto({ wrapped: true })}
              {photo.title && <DownloadLink>{photo.title}</DownloadLink>}
              <a download href={photo.src} target="_blank">
                <Typography variant="body2">download</Typography>
              </a>
            </GalleryItem>
          )}
        />
      </GalleryContainer>
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

const GalleryContainer = styled.div`
  height: 100%;
  width: 100%;
`

const CTAButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
`

const GalleryItem = styled.div`
  padding-bottom: 16px;
`

const DownloadLink = styled.a`
  color: rgb(var(--lsd-text-primary)) !important;
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
