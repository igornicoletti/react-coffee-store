import { MinusIcon, PlusIcon } from 'lucide-react'

import { ProductProps } from '../types'
import { ProductVariants } from '../styles'

const { productactions, productadd, productamount, productbackdrop, productcard, productcontrols, producticon, productimage, productinfo, productinput, productname, productprice } = ProductVariants()

export const ProductComponent = ({ image, name, info, price }: ProductProps) => {
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <div className={productcard()}>
      <div className={productbackdrop()}>
        <img src={'/images/backdropproduct.png'} alt={''} />
        <img className={productimage()} src={image} alt={name} />
      </div>
      <p className={productname()}>{name}</p>
      <p className={productinfo()}>{info}</p>
      <p className={productprice()}>{currentFormat.format(price)}</p>
      <div className={productactions()}>
        <div className={productcontrols()}>
          <button className={productamount()}>
            <MinusIcon className={producticon()} />
          </button>
          <input className={productinput()} defaultValue={'1'} min={1} max={99} type={'number'} />
          <button className={productamount()}>
            <PlusIcon className={producticon()} />
          </button>
        </div>
        <button className={productadd()}>Adicionar</button>
      </div>
    </div>
  )
}