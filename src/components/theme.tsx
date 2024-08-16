import { MoonIcon, SunIcon } from 'lucide-react'

import { UseTheme } from '../hooks/_index'
import { ThemeVariants } from '../styles/_index'

const { themeicon } = ThemeVariants()

export const ThemeComponent = () => {
  const [isEnabled, setEnable] = UseTheme()

  return (
    <button onClick={() => setEnable(!isEnabled)}>
      {isEnabled ? (
        <SunIcon className={themeicon()} aria-hidden={true} />
      ) : (
        <MoonIcon className={themeicon()} aria-hidden={true} />
      )}
    </button>
  )
}