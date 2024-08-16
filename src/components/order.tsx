import { Trash2Icon } from 'lucide-react'

import { ProductProps } from '../types/_index'
import { OrderVariants } from '../styles/_index'
import { QuantityComponent } from './quantity'

const { orderaction, ordercontent, ordericon, orderimage, ordername, orderonly, orderprice, ordersale, ordertext, ordervalues } = OrderVariants()

export const OrderComponent = ({ image, name, price }: ProductProps) => {
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <div className={ordercontent()}>
      <img className={orderimage()} src={image} alt={name} />
      <div className={ordertext()}>
        <p className={ordername()}>{name}</p>
        <div className={ordervalues()}>
          <p className={orderprice()}>{currentFormat.format(price)}</p>
          <p className={ordersale()}>{currentFormat.format(price - (price * 10 / 100))}</p>
        </div>
        <QuantityComponent />
      </div>
      <button className={orderaction()}>
        <span className={orderonly()}>Remover item</span>
        <Trash2Icon className={ordericon()} aria-hidden={true} />
      </button>
    </div>
  )
}