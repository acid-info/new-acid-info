import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'
import { useRecoilValue } from 'recoil'
import themeState from '../../../atom/theme/themeState'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Home: React.FC<HomePageProps> = ({ children, ...props }) => {
  const theme = useRecoilValue(themeState)
  console.log(theme)

  return <Root {...props}>Hello World</Root>
}

const Root = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`
