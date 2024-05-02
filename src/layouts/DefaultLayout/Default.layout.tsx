import { Footer } from '@/components/Footer'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 16px;

  max-width: ${uiConfigs.maxContainerWidth}px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const Main = styled.main`
  width: 100%;
  grid-column: 1 / 17;
`

export default function DefaultLayout(props: PropsWithChildren) {
  return (
    <Root>
      <Main>{props.children}</Main>
      <Footer />
    </Root>
  )
}
