import { tv } from 'tailwind-variants'

export const ErrorVariants = tv({
  slots: {
    errorlayout: 'w-full h-full grid overflow-x-hidden bg-in-dark text-in-white',
    errorcontainer: 'w-full h-full flex flex-col items-center px-6',
    errorcontent: 'flex flex-col items-center text-center gap-4 py-16',
    errortitle: 'font-medium',
    errorstatus: 'text-xs text-in-stone',
  },
  variants: {
    layout: {
      center: {
        errorlayout: 'min-h-screen',
        errorcontainer: 'justify-center'
      }
    }
  }
})