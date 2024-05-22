import { Product } from '@/types/product.types'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FC } from 'react'

export type ProductContainerProps = {
  product: Product
}

const ProductContainer: FC<ProductContainerProps> = (props) => {
  const { id, title, price, imgLink } = props.product

  return (
    <Container>
      <Link href={`/products/${id}`}>
        <img src={imgLink} alt={title} />
        <Typography
          component="p"
          style={{
            fontSize: 14,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          style={{
            fontSize: 14,
          }}
        >
          {price}
        </Typography>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;
  border: 1px solid rgb(var(--lsd-theme-primary));
  border-right-width: 0;
  border-bottom-width: 0;

  &:hover {
    background-color: rgb(var(--lsd-theme-primary));

    p {
      color: white;
    }
  }
`

const Image = styled.img`
  margin-bottom: 16px;
  max-height: 276px;
  max-width: 276px;
`

export default ProductContainer
