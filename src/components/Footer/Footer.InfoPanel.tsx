import { FooterCopyright } from '@/components/Footer/Footer.Copyright'
import { FooterLinksItems } from '@/configs/data.configs'
import { breakpoints } from '@/configs/ui.configs'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FooterContent } from './Footer.Section'

export const FooterInfoPanel = () => {
  return (
    <Wrapper>
      <FooterCopyright />
      <FooterInfo>
        <FooterContent>
          {FooterLinksItems.info.links.map((item, index) => (
            <Link key={'info-' + index} href={item.href}>
              <Typography variant="body2">{item.label}</Typography>
            </Link>
          ))}
        </FooterContent>
        <FooterContent>
          {FooterLinksItems.social.links.map((item, index) => (
            <Link target="_blank" key={'info-' + index} href={item.href}>
              <Typography variant="body2">{item.label}</Typography>
            </Link>
          ))}
        </FooterContent>
      </FooterInfo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 132px;
  box-sizing: border-box;

  border: 1px solid rgb(var(--lsd-theme-primary));
  border-top: none;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    height: fit-content;
  }
`

const FooterInfo = styled.div`
  display: flex;
  width: calc(100% / 3 * 2);

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`
