import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px 0;
  width: 100%;

  grid-column: 1 / 17;

  @media (max-width: ${uiConfigs.maxContainerWidth + 32}px) {
    margin-inline: 16px;
  }
`
