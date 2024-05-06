import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Image from 'next/image'

type Props = {
  thumbnail: string
  title: string
  price: string
}

const ProductPreview = ({ thumbnail, title, price }: Props) => {
  return (
    <Container>
      <Thumbnail
        src={thumbnail}
        alt="Post thumbnail"
        width={125}
        height={125}
      />
      <ProductInfo>
        <Typography variant="body2">{title}</Typography>
        <Description variant="body2">{price}</Description>
      </ProductInfo>
    </Container>
  )
}

export default ProductPreview

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  margin-bottom: 8px;
`

const Thumbnail = styled(Image)`
  margin: 0 auto;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled(Typography)`
  text-decoration: underline;
`
