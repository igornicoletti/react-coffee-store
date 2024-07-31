import { useLoaderData } from 'react-router-dom'

import { ProductApi } from '../api'
import { ProductProps } from '../types'
import { ProductComponents } from '../components'

export const ProductLoader = async () => {
  const products = await ProductApi()
  return products
}

export const ProductPage = () => {
  const products = useLoaderData() as ProductProps[]

  return (
    <div className={'flex flex-col items-center gap-16'}>
      <div className={'flex flex-col items-center gap-4'}>
        <p className={'tracking-widest uppercase text-sm'}>Nossos produtos</p>
        <h2 className={'font-lander text-2xl md:text-4xl'}>Que tal uma xícara de café?</h2>
      </div>
      <div className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'}>
        {products.map((product) => (
          <ProductComponents key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}