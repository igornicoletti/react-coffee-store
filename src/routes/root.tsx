import { Link, Outlet } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

import { RootVariants } from '../styles'

const { rootbackdrop, rootcart, rootcontainer, rootheader, rooticon, rootlayout, roottitle } = RootVariants()

export const RootPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootbackdrop()}>
        <div className={rootcontainer()}>
          <div className={rootheader()}>
            <Link to={'/'}><h1 className={roottitle()}>BLACKBUCKS COFFEE</h1></Link>
            <div className={rootcart()}>
              <ShoppingCartIcon className={rooticon()} />
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      <div className={rootcontainer()}>
        <Outlet />
      </div>
    </div>
  )
}