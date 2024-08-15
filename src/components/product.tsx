import { ProductProps } from '../types'
import { ProductVariants } from '../styles'
import { QuantityComponent } from './quantity'

const { productactions, productadd, productbackdrop, productcard, productimage, productinfo, productname, productprice, productsale, producttext } = ProductVariants()

export const ProductComponent = ({ image, name, info, price }: ProductProps) => {
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <div className={productcard()}>
      <div className={productbackdrop()}>
        <img src={'/images/backdropcart.png'} alt={''} />
        <img className={productimage()} src={image} alt={name} />
      </div>
      <div className={producttext()}>
        <p className={productname()}>{name}</p>
        <p className={productinfo()}>{info}</p>
      </div>
      <div className={productactions()}>
        <p className={productprice()}>{currentFormat.format(price)}</p>
        <p className={productsale()}>{currentFormat.format(price)}</p>
      </div>
      <div className={productactions()}>
        <QuantityComponent />
        <button className={productadd()}>Adicionar</button>
      </div>
    </div>
  )
}