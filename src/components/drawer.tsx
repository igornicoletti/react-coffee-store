import { Trash2Icon, XIcon } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'

import { ProductProps } from '../types'
import { QuantityComponent } from './quantity'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerComponent = ({ isOpen, setIsOpen }: Props) => {
  const products = useLoaderData() as ProductProps[]
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-in-dark/25 duration-250 ease-out data-[closed]:opacity-0" transition />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md data-[closed]:translate-x-full transform transition duration-500 ease-in-out" transition>
              <TransitionChild>
                <div className="absolute top-0 -left-10 flex p-2 duration-500 ease-in-out data-[closed]:opacity-0">
                  <button className="focus:outline-none text-in-white" onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close panel</span>
                    <XIcon className="size-6 shrink-0" aria-hidden={true} />
                  </button>
                </div>
              </TransitionChild>
              <div className="h-full flex flex-col overflow-y-scroll shadow-xl bg-white">
                <div className="flex flex-col p-6">
                  <DialogTitle className="tracking-widest uppercase font-bold">Meu Carrinho</DialogTitle>
                  <p className="text-xs opacity-50">4 itens no carrinho</p>
                </div>
                <ul className="flex-1 flex flex-col gap-12 p-6 pl-2 overflow-y-auto scrollbar">
                  {products.map((product) => (
                    <li key={product.id}>
                      <div className="flex items-center gap-2">
                        <img className="w-20" src={product.image} alt={product.name} />
                        <div className="w-full flex flex-col gap-1">
                          <p className="tracking-widest text-sm uppercase">{product.name}</p>
                          <div className="flex items-center gap-4">
                            <p className="line-through text-xs opacity-50">{currentFormat.format(product.price)}</p>
                            <p className="text-sm">{currentFormat.format(product.price - (product.price * 10 / 100))}</p>
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <QuantityComponent />
                            {/* <p className="text-xs underline underline-offset-2 opacity-50">Remover</p> */}
                          </div>
                        </div>
                        <button className={'p-2 opacity-50 hover:opacity-100 transition ease-in-out duration-250'}>
                          <span className="sr-only">Remover item</span>
                          <Trash2Icon className={'size-4 shrink-0'} aria-hidden={true} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={'flex flex-col gap-4 md:p-6'}>
                  <div className={'flex flex-col gap-1 p-6 pb-0 md:p-0'}>
                    <div className={'flex items-center justify-between gap-2 text-sm'}>
                      <p>Subtotal</p>
                      <p>R$ 24.90</p>
                    </div>
                    <div className={'flex items-center justify-between gap-2 text-sm'}>
                      <p>Descontos</p>
                      <p>R$ 24.90</p>
                    </div>
                    <div className={'flex items-center justify-between gap-2 text-sm font-bold'}>
                      <p>Total</p>
                      <p>R$ 24.90</p>
                    </div>
                  </div>
                  <Link className={'w-full flex items-center justify-center p-4 md:rounded font-bold text-sm tracking-widest uppercase focus:outline-none bg-in-dark text-in-white'} to={'/cart'}>
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
