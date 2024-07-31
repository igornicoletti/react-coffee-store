import { MinusIcon, PlusIcon } from 'lucide-react'

import { ProductProps } from '../types'

export const ProductComponents = ({ id, image, name, info, price }: ProductProps) => {
  return (
    <div className={'flex flex-col gap-6'} key={id}>
      <img src={image} alt={name} />
      <div className={'flex flex-col items-center text-center gap-2'}>
        <p className={'tracking-widest uppercase text-lg'}>{name}</p>
        <p className={'text-sm'}>{info}</p>
        <p className={'tracking-widest text-lg'}>R$ {price}</p>
      </div>
      <div className={'flex items-center justify-center gap-6 mt-auto'}>
        <div className={'flex items-center justify-center'}>
          <button className={'w-8 h-8 flex items-center justify-center rounded-full border border-in-dark'}>
            <MinusIcon className={'size-4 shrink-0'} />
          </button>
          <input className={'w-10 text-lg text-center bg-transparent focus:outline-none'} defaultValue={'1'} min={1} max={99} type={'number'} />
          <button className={'w-8 h-8 flex items-center justify-center rounded-full border border-in-dark'}>
            <PlusIcon className={'size-4 shrink-0'} />
          </button>
        </div>
        <button className={'h-10 px-5 flex items-center justify-center rounded-full border border-in-dark bg-in-dark text-in-white'}>
          <span className={'tracking-widest uppercase text-xs'}>Adicionar</span>
        </button>
      </div>
    </div>
  )
}