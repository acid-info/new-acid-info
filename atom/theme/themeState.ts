import { atom } from 'recoil'
import { localStorageEffect } from '../utils'

export enum ThemeType {
  DARK = 'Dark',
  LIGHT = 'Light',
}

export default atom<ThemeType>({
  key: 'themeState',
  default: ThemeType.LIGHT,
  effects: [localStorageEffect('themeState')],
})
