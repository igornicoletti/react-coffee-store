import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'relative w-full min-h-screen overflow-x-hidden bg-in-white text-in-dark dark:bg-in-dark dark:text-in-white',
    rootbackdrop: 'w-full bg-in-dark text-in-white dark:bg-in-white dark:text-in-dark',
    rootcontainer: 'relative w-full max-w-screen-2xl mx-auto px-6',
    rootheader: 'relative flex flex-col items-center text-center gap-16 py-8',
    roottitle: 'tracking-widest uppercase font-bold',
    rootcart: 'relative flex items-center gap-2',
    rooticon: 'size-4 shrink-0 -mt-1',
    rootonly: 'sr-only',
  }
})