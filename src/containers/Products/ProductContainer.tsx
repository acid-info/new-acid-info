import { Product } from '@/types/product.types'
import { FC } from 'react'

export type ProductContainerProps = {
  product: Product
}

const ProductContainer: FC<ProductContainerProps> = (props) => {
  const { title, price, imgLink } = props.product

  return <div>{title}</div>
}

export default ProductContainer
