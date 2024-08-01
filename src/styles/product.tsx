import { tv } from 'tailwind-variants'

export const ProductVariants = tv({
  slots: {
    productcontent: 'flex flex-col items-center gap-24 py-24',
    producthead: 'flex flex-col items-center text-center gap-4',
    productsubtitle: 'tracking-widest uppercase text-sm',
    producttitle: 'font-lander text-2xl md:text-4xl',
    productitems: 'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-y-24',
    productcard: 'w-full max-w-72 mx-auto flex flex-col gap-4',
    productbackdrop: 'relative',
    productimage: 'absolute -bottom-6',
    productdescript: 'flex flex-col items-center text-center gap-2 pt-6',
    productname: 'tracking-widest uppercase text-lg',
    productinfo: 'text-sm',
    productprice: 'tracking-widest',
    productactions: 'flex items-center justify-center gap-6 mt-auto',
    productcontrols: 'flex items-center justify-center',
    productamount: 'w-8 h-8 flex items-center justify-center rounded-full border border-in-dark hover:bg-in-dark hover:text-in-white focus:outline-none transition ease-in-out duration-200',
    producticon: 'size-4 shrink-0',
    productinput: 'w-10 text-center bg-transparent focus:outline-none',
    productadd: 'h-10 px-5 flex items-center justify-center rounded-full bg-in-dark text-in-white focus:outline-none tracking-widest uppercase text-xs hover:font-bold transition ease-in-out duration-200',
  }
})