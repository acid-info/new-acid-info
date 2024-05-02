import ContentBox from '@/components/ContentBox/ContentBox'
import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'
import { useRecoilValue } from 'recoil'
import themeState from '../../../atom/theme/themeState'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const TempImage = styled.img`
  width: 100%;

  @media (max-width: ${uiConfigs.maxContainerWidth + 32}px) {
    margin-inline: 16px;
    width: calc(100% - 32px);
  }
`

export const HomeContainer: React.FC<HomePageProps> = ({
  children,
  ...props
}) => {
  const theme = useRecoilValue(themeState)

  return (
    <div {...props}>
      <TempImage src="/home/placeholder.png" alt="logo" width={'100%'} />
      <ContentBox />
    </div>
  )
}
