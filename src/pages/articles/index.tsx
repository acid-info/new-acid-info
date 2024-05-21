import { SEO } from '@/components/SEO'
import { ArticleProps, ArticlesContainer } from '@/containers/Articles'
import articles from '@/data/articles.json'

type Props = {
  articles: ArticleProps[]
}

export async function getStaticProps() {
  return {
    props: {
      articles: articles.items as ArticleProps[],
    },
  }
}

export default function MediaPage({ articles }: Props) {
  return (
    <>
      <SEO title="Articles | Acid.info" pagePath={`/articles`} />
      <ArticlesContainer articles={articles} />
    </>
  )
}
