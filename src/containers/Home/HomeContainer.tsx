import { ClientOnly } from '@/components/ClientOnly'
import ContentBox from '@/components/ContentBox/ContentBox'
import { Minecraft } from '@/components/Minecraft'
import { breakpoints } from '@/configs/ui.configs'
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
        <Minecraft />
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
