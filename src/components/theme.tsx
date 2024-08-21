import { MoonIcon, SunIcon } from 'lucide-react'

import { UseTheme } from '../hooks'
import { ThemeVariants } from '../styles'

const { themeicon } = ThemeVariants()

export const ThemeComponent = () => {
  const [isThemed, handleTheme] = UseTheme()

  return (
    <button onClick={handleTheme}>
      {isThemed
        ? <SunIcon className={themeicon()} aria-hidden={true} />
        : <MoonIcon className={themeicon()} aria-hidden={true} />}
    </button>
  )
}