import { breakpoints } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CTAButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`

export const ImageContainer = styled.div`
  aspect-ratio: 296 / 197;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`

export const Title = styled(Typography)`
  height: 80px;

  a {
    color: rgb(var(--lsd-text-primary));

    &:hover,
    &:visited,
    &:active,
    &:focus {
      color: rgb(var(--lsd-text-primary)) !important;
    }
  }
`

export const CreatedAt = styled(Typography)`
  text-align: center;
`
