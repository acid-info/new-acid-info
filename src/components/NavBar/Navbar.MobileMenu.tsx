import { NavbarLinks } from '@/components/NavBar/Navbar.Links'
import { NavLinksItems } from '@/configs/data.configs'
import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useEffect } from 'react'

interface Props {}

export const NavbarMobileMenu = (props: Props) => {
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
        <NavbarLinks links={NavLinksItems} />
      </InnerContainer>
    </NavbarMobileMenuContainer>
  )
}

const NavbarMobileMenuContainer = styled.div`
  position: fixed;
  top: ${uiConfigs.navbarRenderedHeight - 1}px;
  left: 0;
  width: 100%;
  height: calc(100vh - ${uiConfigs.navbarRenderedHeight - 2}px);
  z-index: 100;
  overflow-y: auto;

  @media (min-width: ${uiConfigs.maxContainerWidth}px) {
    display: none;
  }
`

const InnerContainer = styled.div`
  height: 100%;
  width: calc(100% - 32px);
  margin: auto;

  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;
  }
`
