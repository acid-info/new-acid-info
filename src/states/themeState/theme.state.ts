import { TypographyGenericFontFamily } from '@acid-info/lsd-react'
import { hookstate, State, useHookstate } from '@hookstate/core'
import { localstored } from '@hookstate/localstored'

export type ThemeState = {
  mode: 'light' | 'dark'
  genericFontFamily: TypographyGenericFontFamily
}

export const defaultThemeState: ThemeState = {
  mode: 'light',
  genericFontFamily: 'serif',
}

const themeState =
  typeof window === 'undefined'
    ? hookstate(defaultThemeState)
    : hookstate<ThemeState>(defaultThemeState, localstored({ key: 'theme' }))

const wrapThemeState = (state: State<ThemeState>) => ({
  mode: state.mode,
  genericFontFamily: state.genericFontFamily,
  get: () => state.value,
  setMode: (value: ThemeState['mode']) => state.mode.set(value),
  setGenericFontFamily: (value: ThemeState['genericFontFamily']) =>
    state.genericFontFamily.set('serif'),
  toggleMode: () =>
    state.mode.set(state.mode.get() === 'dark' ? 'light' : 'dark'),
})

export const useThemeState = () => wrapThemeState(useHookstate(themeState))

export const useIsDarkTheme = () => useThemeState().mode.get() === 'dark'

export default useThemeState
