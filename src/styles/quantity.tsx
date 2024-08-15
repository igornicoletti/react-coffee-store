import { tv } from 'tailwind-variants'

export const QuantityVariants = tv({
  slots: {
    quantitycontrols: 'flex items-center',
    quantityamount: 'w-8 h-8 flex items-center justify-center rounded-full hover:bg-in-dark hover:text-in-white dark:hover:bg-in-white dark:hover:text-in-dark focus:outline-none transition ease-in-out duration-250',
    quantityinput: 'text-center text-sm bg-transparent focus:outline-none',
    quantityicon: 'size-4 shrink-0',
    quantityonly: 'sr-only',
  }
})