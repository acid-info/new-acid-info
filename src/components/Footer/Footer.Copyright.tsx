import { FooterSection } from '@/components/Footer/Footer.Section'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { siteConfigs } from '../../configs/site.configs'

export const FooterCopyright = () => (
  <OrgInfo>
    <Typography component="div" genericFontFamily="sans-serif" variant="body2">
      {siteConfigs.title}
    </Typography>
  </OrgInfo>
)

const OrgInfo = styled(FooterSection)``
