import { MinusIcon, PlusIcon } from 'lucide-react'

import { QuantityVariants } from '../styles'

const { quantityamount, quantitycontrols, quantityicon, quantityinput, quantityonly } = QuantityVariants()

export const QuantityComponent = () => {

  return (
    <div className={quantitycontrols()}>
      <button className={quantityamount()}>
        <span className={quantityonly()}>Diminuir quantidade</span>
        <MinusIcon className={quantityicon()} aria-hidden={true} />
      </button>
      <input className={quantityinput()} defaultValue={1} min={1} max={99} name={'quantity'} type={'number'} />
      <button className={quantityamount()}>
        <span className={quantityonly()}>Aumentar quantidade</span>
        <PlusIcon className={quantityicon()} aria-hidden={true} />
      </button>
    </div>
  )
}