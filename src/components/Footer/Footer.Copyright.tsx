import { Typography } from '@acid-info/lsd-react'
import { siteConfigs } from '../../configs/site.configs'
import { FooterContent } from './Footer.Section'

export const FooterCopyright = () => (
  <FooterContent>
    <Typography component="div" variant="body2">
      {siteConfigs.title}
    </Typography>
  </FooterContent>
)
