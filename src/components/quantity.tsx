import { MinusIcon, PlusIcon } from 'lucide-react'
import { QuantityVariants } from '../styles'

const { quantityamount, quantitycontrols, quantityicon, quantityinput } = QuantityVariants()

export const QuantityComponent = () => {

  return (
    <div className={quantitycontrols()}>
      <button className={quantityamount()}>
        <MinusIcon className={quantityicon()} />
      </button>
      <input className={quantityinput()} defaultValue={'1'} min={1} max={99} type={'number'} />
      <button className={quantityamount()}>
        <PlusIcon className={quantityicon()} />
      </button>
    </div>
  )
}