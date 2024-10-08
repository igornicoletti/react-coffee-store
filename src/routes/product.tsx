import { useLoaderData } from 'react-router-dom'

import { ProductProps } from '../types'
import { ProductVariants } from '../styles'
import { ProductComponent } from '../components'

const { productcontent, producthead, productitems, productsubtitle, producttitle } = ProductVariants()

export const ProductLoader = async () => {
  const response = await fetch('https://api-coffee-store.vercel.app/products')
  if (!response.ok) throw new Error('Failed to fetch products data')
  return response.json() as Promise<ProductProps[]>
}

export const ProductPage = () => {
  const products = useLoaderData() as ProductProps[]

  return (
    <div className={productcontent()}>
      <div className={producthead()}>
        <p className={productsubtitle()}>Nossos produtos</p>
        <h2 className={producttitle()}>"Não gostaria de entrar para tomar uma xícara de café?"</h2>
      </div>
      <div className={productitems()}>
        {products.map((product) => (<ProductComponent key={product.id} {...product} />))}
      </div>
    </div>
  )
}