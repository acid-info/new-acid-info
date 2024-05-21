import { NavLinksItems } from '@/configs/data.configs'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useEffect } from 'react'
import { FooterInfoPanel } from '../Footer/Footer.InfoPanel'

export const NavbarMobileMenu = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = 'auto'
    }
  }, [])

  return (
    <NavbarMobileMenuContainer>
      <InnerContainer>
        {NavLinksItems.map((link, idx) => (
          <NavLink key={idx} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <FooterContainer>
          <FooterInfoPanel />
        </FooterContainer>
      </InnerContainer>
    </NavbarMobileMenuContainer>
  )
}

const NavbarMobileMenuContainer = styled.div`
  position: fixed;
  padding-top: 45px;
  top: ${uiConfigs.navbarMobileHeight}px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);

  z-index: 100;
  background: rgb(var(--lsd-surface-primary));
  overflow-y: auto;

  @media (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const InnerContainer = styled.div`
  width: calc(100% - 20px);
  margin: auto;

  display: flex;
  flex-direction: column;

  padding-bottom: 60px;
`

const NavLink = styled(Link)`
  border: 1px solid rgb(var(--lsd-border-primary));
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(var(--lsd-text-primary));

  &,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: rgb(var(--lsd-text-primary));
  }

  &:not(:last-of-type) {
    border-bottom: none;
  }
`

const FooterContainer = styled.div`
  margin-top: 60px;

  & > div {
    border-top: 1px solid rgb(var(--lsd-border-primary));
  }
`
