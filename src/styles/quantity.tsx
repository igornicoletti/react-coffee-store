import { tv } from 'tailwind-variants'

export const QuantityVariants = tv({
  slots: {
    quantitycontrols: 'flex items-center',
    quantityamount: 'w-8 h-8 flex items-center justify-center rounded-full hover:md:bg-in-dark hover:md:text-in-white dark:hover:md:bg-in-white dark:hover:md:text-in-dark focus:outline-none transition ease-in-out duration-250',
    quantityinput: 'w-10 text-center text-sm bg-transparent focus:outline-none',
    quantityicon: 'size-4 shrink-0',
    quantityonly: 'sr-only',
  }
})