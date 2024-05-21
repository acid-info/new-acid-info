import { NavbarLinks } from '@/components/NavBar/Navbar.Links'
import { NavbarMobileMenu } from '@/components/NavBar/Navbar.MobileMenu'
import { NavLinksItems } from '@/configs/data.configs'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { CloseIcon, IconButton, MenuIcon } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AcidIcon } from '../Icons/AcidIcon'

export default function NavBar() {
  const { pathname } = useRouter()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const className = pathname.split('/')[1] + '_page'

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev)
  }

  useEffect(() => {
    setShowMobileMenu(false)
  }, [pathname])

  return (
    <Container className={clsx(className)}>
      <NavBarContainer>
        <NavbarLinks links={NavLinksItems.slice(0, 2)} />
        <Centered>
          <Logo href="/">
            <AcidIcon color="primary" />
          </Logo>
        </Centered>
        <NavbarLinks links={NavLinksItems.slice(2, 4)} />
      </NavBarContainer>
      {showMobileMenu && <NavbarMobileMenu />}
      <MobileButton>
        <IconButton size={'small'} onClick={toggleMobileMenu}>
          {showMobileMenu ? (
            <CloseIcon color="primary" />
          ) : (
            <MenuIcon color={'primary'} />
          )}
        </IconButton>
      </MobileButton>
    </Container>
  )
}

const Container = styled.header<{
  bordered?: boolean
}>`
  width: 100%;
  height: ${uiConfigs.navbarRenderedHeight}px;
  background-color: rgb(var(--lsd-theme-secondary));

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  transition: top 0.2s;

  @media (max-width: ${breakpoints.md}px) {
    height: ${uiConfigs.navbarMobileHeight}px;
  }
`

const NavBarContainer = styled.nav<{
  bordered?: boolean
}>`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 16px;

  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;

  margin: auto;

  top: 0;
  width: calc(100% - 32px);
  max-width: ${uiConfigs.maxContainerWidth}px;
  box-sizing: border-box;

  > * {
    align-items: center;
    flex: 0 1 auto;
  }

  div:first-of-type {
    grid-column: 1 / 8;
  }

  div:last-of-type {
    grid-column: 10 / 17;
  }

  style {
    display: none !important;
  }

  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
    width: calc(100% - 20px);
    height: ${uiConfigs.navbarMobileHeight}px;
  }
`

const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  grid-column: 8 / span 2;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: unset;
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0 var(--lsd-spacing-8);
`

const MobileButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  > * {
    background: rgb(var(--lsd-surface-primary));

    :last-of-type {
      margin-left: -1px;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    position: fixed;
    top: 16px;
    right: 10px;
  }
`
