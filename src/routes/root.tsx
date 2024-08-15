import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MoonIcon, ShoppingCartIcon, SunIcon } from 'lucide-react'

import { UseTheme } from '../hooks'
import { ProductApi } from '../api'
import { RootVariants } from '../styles'
import { CartComponent } from '../components'

const { rootactions, rootbackdrop, rootcart, rootcontainer, rootheader, rooticon, rootlayout, rootquantity, rootonly, roottitle } = RootVariants()

export const ProductLoader = async () => {
  const products = await ProductApi()
  return products
}

export const RootPage = () => {
  const [isEnabled, setEnable] = UseTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={rootlayout()}>
      <div className={rootbackdrop()}>
        <div className={rootcontainer()}>
          <div className={rootheader()}>
            <Link to={'/'}><h1 className={roottitle()}>BLACKBUCKS COFFEE</h1></Link>
            <div className={rootactions()}>
              <button onClick={() => setEnable(!isEnabled)}>
                {isEnabled ? (
                  <SunIcon className={rooticon()} aria-hidden={true} />
                ) : (
                  <MoonIcon className={rooticon()} aria-hidden={true} />
                )}
              </button>
              <button className={rootcart()} onClick={() => setIsOpen(true)}>
                <span className={rootonly()}>Meu carrinho</span>
                <ShoppingCartIcon className={rooticon()} aria-hidden={true} />
                <span className={rootquantity()}>4</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={rootcontainer()}>
        <Outlet />
      </div>
      <CartComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}