import { FooterCopyright } from '@/components/Footer/Footer.Copyright'
import styled from '@emotion/styled'

export const FooterInfoPanel = () => {
  return (
    <Wrapper>
      <FooterCopyright />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  border-top: 1px solid rgb(var(--lsd-theme-primary));
  padding-top: 16px;
`
