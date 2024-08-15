import { XIcon } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
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
      <DialogBackdrop className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0" transition />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-sm data-[closed]:translate-x-full transform transition duration-500 ease-in-out" transition>
              <TransitionChild>
                <div className="absolute -left-10 top-0 flex p-2 duration-500 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="relative rounded-md text-white focus:outline-none">
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XIcon className="size-6 shrink-0" aria-hidden={true} />
                  </button>
                </div>
              </TransitionChild>
              <div className="h-full flex flex-col overflow-y-scroll shadow-xl bg-white">
                <div className="flex flex-col gap-1 p-6">
                  <DialogTitle className="tracking-widest uppercase font-bold">Meu Carrinho</DialogTitle>
                  <p className="text-xs opacity-50">4 itens no carrinho</p>
                </div>
                <ul className="flex-1 flex flex-col gap-16 py-8 pr-6 overflow-y-auto">
                  {products.map((product) => (
                    <li key={product.id}>
                      <div className="flex items-center gap-4">
                        <img className="h-16" src={product.image} alt={product.name} />
                        <div className="w-full flex flex-col gap-1">
                          <p className="uppercase">{product.name}</p>
                          <div className="flex items-center gap-4">
                            <p className="line-through text-xs opacity-50">{currentFormat.format(product.price)}</p>
                            <p className="font-bold text-sm">{currentFormat.format(product.price)}</p>
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <QuantityComponent />
                            <p className="text-xs underline underline-offset-2 opacity-50">Remover</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
