import { Trash2Icon } from 'lucide-react'

import { ProductProps } from '../types'
import { QuantityComponent } from './quantity'

export const OrderComponent = ({ image, name, price }: ProductProps) => {
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <div className="flex items-center gap-2">
      <img className="w-20" src={image} alt={name} />
      <div className="w-full flex flex-col gap-1">
        <p className="tracking-widest text-sm uppercase">{name}</p>
        <div className="flex items-center gap-4">
          <p className="line-through text-xs opacity-50">{currentFormat.format(price)}</p>
          <p className="text-sm">{currentFormat.format(price - (price * 10 / 100))}</p>
        </div>
        <QuantityComponent />
      </div>
      <button className={'p-2 pr-0 opacity-50 hover:opacity-100 transition ease-in-out duration-250'}>
        <span className="sr-only">Remover item</span>
        <Trash2Icon className={'size-4 shrink-0'} aria-hidden={true} />
      </button>
    </div>
  )
}