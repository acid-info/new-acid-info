import { LsdThemeStyles } from '@acid-info/lsd-react/theme'
import { Global } from '@emotion/react'
import { useEffect } from 'react'
import useThemeState from '../../states/themeState/theme.state'
import { useLSDTheme } from './themes'

export const LSDThemeProvider = () => {
  const theme = useLSDTheme()
  const { mode, genericFontFamily } = useThemeState()

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement
    html.setAttribute('data-theme', mode.value)
    html.setAttribute('data-font-family', genericFontFamily.value)
  }, [mode.value, genericFontFamily.value])

  return (
    <>
      <LsdThemeStyles
        customThemes={{ dark: theme.dark, light: theme.light }}
        initialTheme={theme.current.name}
      />
      <Global styles={theme.darkCssVars} />
      <Global styles={theme.lightCssVars} />
    </>
  )
}
