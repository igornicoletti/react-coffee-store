import { Link, Outlet } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

import { RootVariants } from '../styles'
import { DrawerComponent } from '../components'
import { useState } from 'react'
import { ProductApi } from '../api'

const { rootbackdrop, rootcart, rootcontainer, rootheader, rooticon, rootlayout, roottitle } = RootVariants()

export const ProductLoader = async () => {
  const products = await ProductApi()
  return products
}

export const RootPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={rootlayout()}>
      <div className={rootbackdrop()}>
        <div className={rootcontainer()}>
          <div className={rootheader()}>
            <Link to={'/'}><h1 className={roottitle()}>BLACKBUCKS COFFEE</h1></Link>
            <button className={rootcart()} onClick={() => setIsOpen(true)}>
              <ShoppingCartIcon className={rooticon()} />
              <span>4</span>
            </button>
          </div>
        </div>
      </div>
      <div className={rootcontainer()}>
        <Outlet />
      </div>
      <DrawerComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}