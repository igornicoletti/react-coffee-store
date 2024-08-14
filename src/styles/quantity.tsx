import { tv } from 'tailwind-variants'

export const QuantityVariants = tv({
  slots: {
    quantitycontrols: 'flex items-center',
    quantityamount: 'w-5 h-5 flex items-center justify-center rounded-full border border-in-dark hover:bg-in-dark hover:text-in-white focus:outline-none transition ease-in-out duration-200',
    quantityicon: 'size-4 shrink-0',
    quantityinput: 'w-10 text-center bg-transparent focus:outline-none',
  }
})