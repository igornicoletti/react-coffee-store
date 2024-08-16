import { useEffect } from 'react'
import { UseStorage } from './useStorage'

export const UseTheme = () => {
  const [isThemed, setTheme] = UseStorage('coffee-theme')

  useEffect(() => isThemed
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark'), [isThemed])

  return [isThemed, setTheme]
}