import { Product } from '@/types/product.types'
import { Breadcrumb, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import React from 'react'

export type Props = {
  data: Product
}

export const ProductContainer: React.FC<Props> = ({ data }: Props) => {
  return (
    <Container>
      <Breadcrumb />
      <Typography>{data.title}</Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
`
