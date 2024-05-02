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

  return <div {...props}>Hello World</div>
}
