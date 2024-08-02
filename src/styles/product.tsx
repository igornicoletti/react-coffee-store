import { tv } from 'tailwind-variants'

export const ProductVariants = tv({
  slots: {
    productcontent: 'flex flex-col gap-24 py-24',
    producthead: 'flex flex-col items-center text-center gap-4',
    productsubtitle: 'tracking-widest uppercase text-sm',
    producttitle: 'font-lander text-4xl leading-snug max-w-2xl',
    productitems: 'flex flex-wrap items-center justify-center gap-20',
    productcard: 'w-full max-w-80 flex flex-col text-center gap-2',
    productbackdrop: 'relative',
    productimage: 'absolute -bottom-6',
    productname: 'tracking-widest uppercase text-lg pt-10',
    productinfo: 'text-sm px-4',
    productprice: 'tracking-widest line-through text-xs opacity-50',
    productsale: 'tracking-widest font-bold',
    productactions: 'flex items-center justify-center gap-6 pt-2 mt-auto',
    productcontrols: 'flex items-center justify-center',
    productamount: 'w-8 h-8 flex items-center justify-center rounded-full border border-in-dark hover:bg-in-dark hover:text-in-white focus:outline-none transition ease-in-out duration-200',
    producticon: 'size-4 shrink-0',
    productinput: 'w-10 text-center bg-transparent focus:outline-none',
    productadd: 'h-10 px-5 flex items-center justify-center rounded-full bg-in-dark text-in-white focus:outline-none tracking-widest uppercase text-xs',
  }
})