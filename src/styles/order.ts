import { tv } from 'tailwind-variants'

export const OrderVariants = tv({
  slots: {
    ordercontent: 'flex items-center',
    orderimage: 'w-20',
    ordertext: 'w-full flex flex-col',
    ordername: 'tracking-widest text-sm uppercase',
    ordervalues: 'flex items-center gap-4',
    orderprice: 'line-through text-xs opacity-50',
    ordersale: 'text-sm',
    orderaction: 'p-4 text-in-dark/50 hover:text-in-dark',
    orderonly: 'sr-only',
    ordericon: 'size-4 shrink-0',
  }
})