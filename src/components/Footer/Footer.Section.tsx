import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
  width: 100%;

  grid-column: 1 / 17;

  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
    width: calc(100% - 20px);
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  box-sizing: border-box;
  padding: 8px;

  &:not(:last-child) {
    border-right: 1px solid rgb(var(--lsd-border-primary));
  }

  a,
  a:visited,
  a:hover,
  a:active,
  a:focus {
    color: rgb(var(--lsd-text-primary));
  }

  @media (max-width: ${breakpoints.md}px) {
    height: 144px;
  }
`
