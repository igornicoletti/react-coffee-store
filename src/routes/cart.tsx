export const CartPage = () => {
  return (
    <div className={'flex flex-col lg:flex-row gap-24 py-24'}>
      <div className={'flex-1 flex-col gap-16'}>
        <h2 className={'tracking-widest uppercase text-xl'}>Meu carrinho</h2>
      </div>
      <div className={'w-full max-w-md flex flex-col gap-16'}>
        <h2 className={'tracking-widest uppercase text-xl'}>Resumo do pedido</h2>
        <div className={'flex flex-col gap-1'}>
          <div className={'flex items-center justify-between gap-2 text-lg'}>
            <p>Subtotal</p>
            <p>R$ 24.90</p>
          </div>
          <div className={'flex items-center justify-between gap-2 text-lg'}>
            <p>Descontos</p>
            <p>R$ 24.90</p>
          </div>
          <div className={'flex items-center justify-between gap-2 uppercase font-bold text-lg'}>
            <p>Total</p>
            <p>R$ 24.90</p>
          </div>
        </div>
      </div>
    </div>
  )
}