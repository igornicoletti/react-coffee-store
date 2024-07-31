import { Link, Outlet } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

export const RootPage = () => {
  return (
    <div className={'relative w-full min-h-screen overflow-x-hidden bg-in-white text-in-dark'}>
      <div className={'w-full bg-in-dark text-in-white'}>
        <div className={'relative w-full max-w-screen-xl mx-auto px-6 py-8'}>
          <div className={'flex flex-col items-center gap-16'}>
            <Link to={'/'}><h1 className={'tracking-widest uppercase'}>BLACKBUCKS COFFEE</h1></Link>
            <div className={'absolute right-6 flex items-center gap-2'}>
              <ShoppingCartIcon className={'size-4 -mt-1'} />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div className={'relative w-full max-w-screen-xl mx-auto px-6 py-24'}>
        <Outlet />
      </div>
    </div>
  )
}