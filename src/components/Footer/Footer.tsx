import { FooterInfoPanel } from '@/components/Footer/Footer.InfoPanel'
import { FooterNewsletter } from '@/components/Footer/Footer.Newsletter'
import { FooterContainer } from '@/components/Footer/Footer.Section'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNewsletter />
      <FooterInfoPanel />
    </FooterContainer>
  )
}
