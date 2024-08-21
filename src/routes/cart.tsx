import { TrashIcon } from 'lucide-react'
import { QuantityComponent } from '../components'
import { Link } from 'react-router-dom'

export const CartPage = () => {
  return (
    <div className={'flex flex-col xl:flex-row gap-16 xl:gap-24 py-24'}>
      <div className={'flex-1'}>
        <div className={'overflow-x-auto'}>
          <table className={'w-full text-left'}>
            <thead>
              <tr className={'*:whitespace-nowrap *:px-4 first:*:pl-0 last:*:pr-0 uppercase'}>
                <th>Produtos</th>
                <th>Preço</th>
                <th>Qtd</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className={'*:whitespace-nowrap *:py-2 *:px-4 first:*:pl-0 last:*:pr-0'}>
                <td>
                  <div className={'flex items-center gap-4'}>
                    <img className={'w-16 hidden md:block md:-ml-4'} src={'/images/cappuccino.png'} alt="" />
                    <p>Cappuccino Classic</p>
                  </div>
                </td>
                <td>
                  <div className={'flex gap-4'}>
                    <p className={'line-through text-sm opacity-50'}>R$ 20.99</p>
                    <p className={''}>R$ 20.99</p>
                  </div>
                </td>
                <td><QuantityComponent /></td>
                <td><p className={'font-semibold'}>R$ 20.99</p></td>
                <td><TrashIcon className={'size-4 shrink-0 ml-auto'} aria-hidden={true} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={'w-full xl:max-w-sm flex flex-col gap-6'}>
        <h2 className={'font-semibold uppercase'}>Resumo do pedido</h2>
        <div className={'flex flex-col gap-6'}>
          <div className={'flex flex-col gap-1'}>
            <div className={'flex items-center justify-between gap-2'}>
              <p>Subtotal</p>
              <p>R$ 24.90</p>
            </div>
            <div className={'flex items-center justify-between gap-2'}>
              <p>Descontos</p>
              <p>R$ 24.90</p>
            </div>
            <div className={'flex items-center justify-between gap-2'}>
              <p>Entrega</p>
              <p>GRÁTIS</p>
            </div>
            <div className={'flex items-center justify-between gap-2 uppercase font-semibold'}>
              <p>Total</p>
              <p>R$ 24.90</p>
            </div>
          </div>
          <button className={'w-full h-12 flex items-center justify-center rounded font-semibold tracking-widest uppercase focus:outline-none bg-in-dark text-in-white'}>
            Finalizar compra
          </button>
          <Link className={'w-full text-center underline focus:outline-none'} to={'/'}>
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  )
}