import { AtomEffect, DefaultValue } from 'recoil'

const isBrowser = typeof window !== 'undefined'

export const localStorageEffect =
  (key: string): AtomEffect<any> =>
  ({ setSelf, onSet }) => {
    if (isBrowser) {
      const savedValue = localStorage.getItem(key)
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
      }
      onSet((newValue) => {
        if (!isBrowser) {
          return
        }

        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(newValue))
        }
      })
    }
  }
