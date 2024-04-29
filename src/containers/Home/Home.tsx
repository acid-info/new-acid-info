import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Home: React.FC<HomePageProps> = ({ children, ...props }) => {
  return <Root {...props}></Root>
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
