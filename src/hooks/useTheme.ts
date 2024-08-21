import { useEffect } from 'react'
import { UseLocalStorage } from './useLocalStorage'

export const UseTheme = (): [boolean, () => void] => {
  const [isThemed, setTheme] = UseLocalStorage<boolean>('coffee-theme', false)

  useEffect(() => {
    const root = window.document.documentElement

    if (isThemed) {
      root.classList.add('dark')
      localStorage.setItem('coffee-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('coffee-theme', 'light')
    }
  }, [isThemed])

  const handleTheme = () => setTheme(!isThemed)

  return [isThemed, handleTheme]
}