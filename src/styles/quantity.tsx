import { tv } from 'tailwind-variants'

export const QuantityVariants = tv({
  slots: {
    quantitycontrols: 'flex items-center',
    quantityamount: 'w-5 h-5 flex items-center justify-center rounded-full border border-in-dark hover:bg-in-dark hover:text-in-white dark:border-in-white dark:hover:bg-in-white dark:hover:text-in-dark focus:outline-none transition ease-in-out duration-250',
    quantityicon: 'size-4 shrink-0',
    quantityonly: 'sr-only',
    quantityinput: 'w-10 text-center bg-transparent focus:outline-none',
  }
})