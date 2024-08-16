import { useLoaderData } from 'react-router-dom'

import { ProductApi } from '../api/_index'
import { ProductProps } from '../types/_index'
import { ProductVariants } from '../styles/_index'
import { ProductComponent } from '../components/_index'

const { productcontent, producthead, productitems, productsubtitle, producttitle } = ProductVariants()

export const ProductLoader = async () => {
  const products = await ProductApi()
  return products
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