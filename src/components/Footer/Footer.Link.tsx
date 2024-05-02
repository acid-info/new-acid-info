import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export const FooterLink = styled(Typography)`
  width: fit-content;

  &:not(:last-child) {
    &:after {
      width: 2px;
      height: 2px;
      background: rgb(var(--lsd-surface-secondary));
      display: inline-block;
      content: ' ';
      margin-left: 8px;
      border-radius: 50%;
      transform: translateY(-2px);
    }
  }
`
