import { useEffect } from 'react'
import { UseLocalStorage } from './useLocalStorage'

export const UseTheme = (): [boolean, () => void] => {
  const [isThemed, setTheme] = UseLocalStorage<boolean>('coffee-theme', false)

  useEffect(() => isThemed
    ? window.document.documentElement.classList.add('dark')
    : window.document.documentElement.classList.remove('dark'), [isThemed])

  const handleTheme = () => setTheme(!isThemed)

  return [isThemed, handleTheme]
}