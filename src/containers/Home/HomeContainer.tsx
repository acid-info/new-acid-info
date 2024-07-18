import { ClientOnly } from '@/components/ClientOnly'
import ContentBox from '@/components/ContentBox/ContentBox'
import { breakpoints } from '@/configs/ui.configs'
import { WebCave } from '@acid-info/webcave-react'
import styled from '@emotion/styled'
import React from 'react'
import { useRecoilValue } from 'recoil'
import themeState from '../../../atom/theme/themeState'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomeContainer: React.FC<HomePageProps> = ({
  children,
  ...props
}) => {
  const theme = useRecoilValue(themeState)

  return (
    <Container {...props}>
      <ClientOnly>
        <WebCave
          chunkSize={8}
          worldSize={16}
          texturePack={{
            terrain: '/webcave/terrain.png',
            player: '/webcave/player.png',
            backgroundImage: '/webcave/background.png',
            blockThumbsImage: '/webcave/blockthumbs.png',
          }}
          height={'300px'}
        />
      </ClientOnly>
      <ContentBox />
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
  }
`
