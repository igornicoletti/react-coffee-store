import { Link, Outlet } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

import { RootVariants } from '../styles'
import { DrawerComponent, ThemeComponent } from '../components'
import { useState } from 'react'
import { ProductApi } from '../api'
import { Switch } from '@headlessui/react'
import { UseTheme } from '../hooks'

const { rootbackdrop, rootcart, rootcontainer, rootheader, rooticon, rootlayout, rootonly, roottitle } = RootVariants()

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
            <div className={'absolute right-0 flex items-center gap-8'}>
              <Switch className={'relative h-4 w-9 group flex rounded-full outline outline-2 outline-black/15 bg-black/10'} checked={isEnabled} onChange={setEnable}>
                <span className={'h-4 w-5 rounded-full transform group-aria-checked:translate-x-4 translate-x-0 transition ease-in-out duration-250 bg-in-white'} aria-hidden={true} />
              </Switch>
              <ThemeComponent />
              <button className={rootcart()} onClick={() => setIsOpen(true)}>
                <span className={rootonly()}>Meu carrinho</span>
                <ShoppingCartIcon className={rooticon()} aria-hidden={true} />
                <span>4</span>
              </button>
            </div>
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