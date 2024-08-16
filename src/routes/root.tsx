import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MoonIcon, ShoppingCartIcon, SunIcon } from 'lucide-react'

import { UseTheme } from '../hooks'
import { RootVariants } from '../styles'
import { CartComponent } from '../components'

const { rootactions, rootbackdrop, rootcart, rootcontainer, rootheader, rooticon, rootlayout, rootquantity, rootonly, roottitle } = RootVariants()

export const RootPage = () => {
  const [isEnabled, setEnable] = UseTheme()
  const [isOpened, setIsOpen] = useState<boolean>(false)

  return (
    <div className={rootlayout()}>
      <div className={rootbackdrop()}>
        <div className={rootcontainer()}>
          <div className={rootheader()}>
            <div className={rootactions()}>
              <button onClick={() => setEnable(!isEnabled)}>
                {isEnabled ? (
                  <SunIcon className={rooticon()} aria-hidden={true} />
                ) : (
                  <MoonIcon className={rooticon()} aria-hidden={true} />
                )}
              </button>
              <button className={rootcart()} onClick={() => setIsOpen(!isOpened)}>
                <span className={rootonly()}>Meu carrinho</span>
                <ShoppingCartIcon className={rooticon()} aria-hidden={true} />
                <span className={rootquantity()}>4</span>
              </button>
            </div>
            <Link className={roottitle()} to={'/'}><h1>BLACKBUCKS COFFEE</h1></Link>
          </div>
        </div>
      </div>
      <div className={rootcontainer()}>
        <Outlet />
      </div>
      <CartComponent isOpened={isOpened} setIsOpen={setIsOpen} />
    </div>
  )
}