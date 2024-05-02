import { NavbarLinks } from '@/components/NavBar/Navbar.Links'
import { NavbarMobileMenu } from '@/components/NavBar/Navbar.MobileMenu'
import { NavLinksItems } from '@/configs/data.configs'
import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AcidIcon } from '../Icons/AcidIcon'

export default function NavBar() {
  const { pathname } = useRouter()
  const [hide, setHide] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const className = pathname.split('/')[1] + '_page'

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
    setShowMobileMenu(false)
  }, [pathname])

  return (
    <Container className={clsx(hide && 'hide', className)}>
      <NavBarContainer>
        <NavbarLinks links={NavLinksItems.slice(0, 2)} />
        <Centered>
          <Logo href="/">
            <AcidIcon color="primary" />
          </Logo>
        </Centered>
        <NavbarLinks links={NavLinksItems.slice(0, 2)} />
        {showMobileMenu && <NavbarMobileMenu />}
      </NavBarContainer>
    </Container>
  )
}

const Container = styled.header<{
  bordered?: boolean
}>`
  width: 100%;
  height: ${uiConfigs.navbarRenderedHeight}px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  transition: top 0.2s;

  &.article_page,
  &.search_page {
  }
`

const Buttons = styled.div<{ mobile?: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;

  > * {
    :last-of-type {
      margin-left: -1px;
    }
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
`

const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  grid-column: 8 / span 2;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0 var(--lsd-spacing-8);
`
