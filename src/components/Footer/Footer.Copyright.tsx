import { breakpoints } from '@/configs/ui.configs'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { siteConfigs } from '../../configs/site.configs'
import { FooterContent } from './Footer.Section'

export const FooterCopyright = () => (
  <CopyRight>
    <Typography component="div" variant="body2">
      {siteConfigs.title}
    </Typography>
  </CopyRight>
)

const CopyRight = styled(FooterContent)`
  width: calc(100% / 3);

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;

    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    height: 144px;

    &:not(:last-child) {
      border-right: none !important;
    }
  }
`
