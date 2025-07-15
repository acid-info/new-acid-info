import { ClientOnly } from '@/components/ClientOnly'
import ContentBox from '@/components/ContentBox/ContentBox'
import { breakpoints } from '@/configs/ui.configs'
import { WebCaveMultiplayer } from '@acid-info/webcave-react'
import styled from '@emotion/styled'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomeContainer: React.FC<HomePageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <ClientOnly>
        <WebCaveContainer>
          <WebCaveMultiplayer
            serverUrl={'https://webcave.infra.status.im/'} // Temporarily hard-coded
            chunkSize={8}
            texturePack={{
              terrain: '/webcave/terrain.png',
              player: '/webcave/player.png',
              backgroundImage: '/webcave/background.png',
              blockThumbsImage: '/webcave/blockthumbs.png',
            }}
            height={'100%'}
          />
        </WebCaveContainer>
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

const WebCaveContainer = styled.div`
  @font-face {
    font-family: 'Monocraft';
    src: local('Monocraft'), url('/fonts/Monocraft.ttf') format('opentype');
    font-weight: normal;
  }

  height: 450px;

  * {
    font-family: 'Monocraft' !important;
  }

  button {
    background: none;
    border: 0;
    color: white;

    &:hover {
      border: 1px solid black;
      border-radius: 8px;
    }
  }
`
