import { tv } from 'tailwind-variants'

export const ProductVariants = tv({
  slots: {
    productcontent: 'flex flex-col gap-24 py-24',
    producthead: 'flex flex-col items-center text-center gap-4',
    productsubtitle: 'tracking-widest text-sm uppercase',
    producttitle: 'font-lander text-4xl leading-snug max-w-2xl',
    productitems: 'flex flex-wrap items-center justify-center gap-24',
    productcard: 'w-full max-w-80 flex flex-col text-center gap-4',
    productbackdrop: 'relative',
    productimage: 'absolute -bottom-6',
    producttext: 'flex flex-col gap-2 px-4 pt-6',
    productname: 'tracking-widest uppercase text-lg',
    productinfo: 'text-sm',
    productprice: 'line-through opacity-50',
    productsale: '',
    productactions: 'flex items-center justify-center gap-6 pt-2 mt-auto',
    productadd: 'h-8 px-4 flex items-center justify-center rounded-full font-bold tracking-widest uppercase text-xs focus:outline-none bg-in-dark text-in-white dark:bg-in-white dark:text-in-dark',
  }
})