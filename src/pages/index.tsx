import { SEO } from '@/components/SEO'
import { HomeContainer } from '@/containers/Home'
import { Button } from '@acid-info/lsd-react'

export default function HomePage() {
  return (
    <>
      <SEO />
      <Button>TEST</Button>
      <HomeContainer />
    </>
  )
}
