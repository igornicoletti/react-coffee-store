import { XIcon } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'

import { ProductProps } from '../types'
import { OrderComponent } from './order'

type Props = {
  isOpened: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartComponent = ({ isOpened, setIsOpen }: Props) => {
  const products = useLoaderData() as ProductProps[]

  return (
    <Dialog open={isOpened} onClose={setIsOpen} className='relative z-10'>
      <DialogBackdrop className='fixed inset-0 bg-in-dark/50 duration-250 ease-out data-[closed]:opacity-0' transition />
      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <DialogPanel className='pointer-events-auto w-screen max-w-sm data-[closed]:translate-x-full transform transition duration-500 ease-in-out' transition>
              <TransitionChild>
                <div className='absolute top-0 -left-10 flex p-2 duration-500 ease-in-out data-[closed]:opacity-0'>
                  <button className='focus:outline-none text-in-white' onClick={() => setIsOpen(false)}>
                    <span className='sr-only'>Close panel</span>
                    <XIcon className='size-6 shrink-0' aria-hidden={true} />
                  </button>
                </div>
              </TransitionChild>
              <div className='h-full flex flex-col overflow-y-scroll shadow-xl bg-in-white'>
                <div className='flex flex-col p-6'>
                  <h2 className='tracking-widest uppercase'>Meu Carrinho</h2>
                  <p className='text-xs opacity-50'>4 itens no carrinho</p>
                </div>
                <div className='flex-1 flex flex-col gap-12 py-6 px-2 overflow-y-auto scrollbar'>
                  {products.map((product) => (<OrderComponent key={product.id} {...product} />))}
                </div>
                <div className={'flex flex-col gap-4 md:p-6 text-sm'}>
                  <div className={'flex flex-col gap-1 p-6 pb-0 md:p-0'}>
                    <div className={'flex items-center justify-between gap-2'}>
                      <p>Subtotal</p>
                      <p>R$ 24.90</p>
                    </div>
                    <div className={'flex items-center justify-between gap-2'}>
                      <p>Descontos</p>
                      <p>R$ 24.90</p>
                    </div>
                    <div className={'flex items-center justify-between gap-2'}>
                      <p><b>Total</b></p>
                      <p><b>R$ 24.90</b></p>
                    </div>
                  </div>
                  <Link className={'w-full p-6 md:p-4 md:rounded text-center tracking-widest uppercase focus:outline-none bg-in-dark text-in-white'} to={'/cart'}>
                    Finalizar compra
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}