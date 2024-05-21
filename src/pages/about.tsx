import { SEO } from '@/components/SEO'
import { AboutContainer } from '@/containers/About'

export default function AboutPage() {
  return (
    <>
      <SEO title="About | Acid.info" pagePath={`/about`} />
      <AboutContainer />
    </>
  )
}
