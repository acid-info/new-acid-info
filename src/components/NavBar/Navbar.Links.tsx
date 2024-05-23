import { breakpoints } from '@/configs/ui.configs'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  links: { href: string; label: string }[]
}

export const NavbarLinks = ({ links }: Props) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <Container>
      {links.map((link, idx) => (
        <NavLink key={idx} href={link.href} isactive={pathname === link.href}>
          <Typography variant="label1" component="span">
            {link.label}
          </Typography>
        </NavLink>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a:last-of-type {
    border-left: none;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  a:active,
  a:focus,
  a.active {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isactive',
})<{ isactive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  border: 1px solid rgb(var(--lsd-border-primary));
  height: 32px;
  box-sizing: border-box;

  background-color: ${({ isactive }) =>
    isactive ? 'rgb(var(--lsd-theme-primary))' : 'transparent'};

  & > span {
    color: ${({ isactive }) =>
      isactive ? 'white' : 'rgb(var(--lsd-text-primary))'};
  }
`
