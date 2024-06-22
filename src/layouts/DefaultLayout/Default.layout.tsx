import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/NavBar'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { RelatedArticlesContainer } from '@/containers/Articles'
import articles from '@/data/articles.json'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0 16px;

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
  margin-top: ${uiConfigs.navbarRenderedHeight}px;
  margin-bottom: 148px;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: ${uiConfigs.navbarMobileHeight}px;
  }
`

export default function DefaultLayout(props: PropsWithChildren) {
  const router = useRouter()
  const isArticlePage = router.pathname.includes('/articles/')

  return (
    <Root>
      <Navbar />
      <Main>{props.children}</Main>
      {isArticlePage && (
        <RelatedArticlesContainer articles={articles.items.slice(0, 8)} />
      )}
      <Footer />
    </Root>
  )
}
